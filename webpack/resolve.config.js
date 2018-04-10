const path = require('path');

const resolveConfig = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../src/'),
            'node_modules'
        ],
        alias: {
            App: path.resolve(__dirname, '../src/app/'),
            Config: path.resolve(__dirname, '../src/conf/'),
            Components: path.resolve(__dirname, '../src/components/')
        }
    }
};
module.exports = resolveConfig;