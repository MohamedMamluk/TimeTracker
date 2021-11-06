/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   config.module.rules.push({
  //     test: /\.(png|jpg|gif)$/i,

  //     type: 'asset/resource',
  //   });

  //   return config;
  // },
};
