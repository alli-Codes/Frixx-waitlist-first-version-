module.exports = {
  content: [
    './src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ACCCC9',
        'green': '#4BB064'
      },

      boxShadow: {
        '3xl': '0px 4px 8px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
