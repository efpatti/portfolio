const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/repo-images", async (req, res) => {
  try {
    console.log("Fetching repo images...");
    const response = await axios.get(
      "https://api.github.com/users/efpatti/repos"
    );
    const repos = response.data;

    const portfolioRepos = await Promise.all(
      repos.map(async (repo) => {
        const readmeResponse = await axios.get(
          `https://raw.githubusercontent.com/efpatti/${repo.name}/main/README.md`
        );
        const readmeText = readmeResponse.data;
        if (readmeText.includes("portfólio: true")) {
          const imagesResponse = await axios.get(
            `https://api.github.com/repos/efpatti/${repo.name}/contents`
          );
          const responseData = imagesResponse.data;
          const imageFiles = responseData.filter(
            (item) =>
              item.type === "file" && item.name.match(/\.(jpg|jpeg|png|gif)$/i)
          );
          const imageUrls = imageFiles.map((item) => item.download_url);
          return { name: repo.name, images: imageUrls };
        }
        return null;
      })
    );

    const portfolioImages = portfolioRepos.reduce((acc, curr) => {
      if (curr) {
        acc[curr.name] = curr.images;
      }
      return acc;
    }, {});

    console.log("Fetched repo images:", portfolioImages);

    res.json(portfolioImages);
  } catch (error) {
    console.error("Error fetching repo images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
