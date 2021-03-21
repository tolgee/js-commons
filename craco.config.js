const path = require("path");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = {
    webpack: {
        configure: webpackConfig => {
            // ts-loader is required to reference external typescript projects/files (non-transpiled)
            webpackConfig.module.rules.push({
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    configFile: 'tsconfig.json',
                },
            })

            //Enable import from outside of src
            const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
                ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
            );
            webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

            return webpackConfig;
        }
    }
};