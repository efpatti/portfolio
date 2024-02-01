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
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
}
