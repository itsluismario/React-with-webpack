const path = require('path');

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: path.join(__dirname, "./**"), //observa los cambios en todos nuestros archivos y actualiza el navegador
        compress: true,
        port: 8080,
        open: true,
    }
}