const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(tsx|ts|js|mjs|jsx)$/,
            include: (input) =>
                !input.includes('/.yarn/cache/') &&
                !input.includes('/.yarn/unplugged/') &&
                !input.includes('/.yarn/__virtual__/'),
            use: options.defaultLoaders.babel,
        });

        config.module.rules.push({
            test: /\.(le|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        });

        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].css',
                chunkFilename: 'static/css/[contenthash].css',
            })
        );

        return config;
    },
};

module.exports = nextConfig;
