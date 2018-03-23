module.exports = {
    entry: "./app-client.js",
    output:{ //output file
        filename: "../public/bundle.js"
    },
    module: { // updated for webpack 4.2
        rules: [
            {
                exclude: /(node_modules|app-server.js)/,
                loader: 'babel-loader'
            }

        ]
    }



};
