module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'nuwe-calendar.js',
        path: './dist'
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
            }
        ]
    }
};