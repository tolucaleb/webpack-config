module.exports = {
    plugins: [
        require('postcss-smart-import'),
        require('precss'),
        require('autoprefixer'),
    ],
    'postcss-cssnext': {
        browsers: ['last 2 versions', '> 5%'],
    }
}