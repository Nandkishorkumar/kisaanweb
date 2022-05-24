/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

module.exports = {
  // pwa: {
  //   disable: process.env.NODE_ENV === "development",
  //   dest: "public",
  //   runtimeCaching,
  // },

  images: {
    domains: [
      "s3.amazonaws.com",
      "127.0.0.1",
      "picsum.photos",
      "kisaan-web-app.s3.ap-southeast-2.amazonaws.com",
      "main.d2xygxlwsnvpc.amplifyapp.com"
    ],
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ["graphql-let/schema/loader"],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },

}
