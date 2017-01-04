var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'nuwe-calendar.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.json/,
                loader: "json-loader",
                exclude: /node_modules/
            }
        ]
    }
};