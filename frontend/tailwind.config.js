module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#3490dc',  // Adapte as cores conforme sua preferência
        secondary: '#ffed4a',
        home: "#271616",
        fraquinho: "#351D1D",
        fortinho: "#1B0E0E"
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
}
