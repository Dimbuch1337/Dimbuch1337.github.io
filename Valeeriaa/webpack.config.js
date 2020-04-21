const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }

};
module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            loader: 'less-loader', // compiles Less to CSS
        }, ],
    },

};