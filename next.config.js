/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 절대경로 설정 추가
    config.resolve = {
      alias: {
        react: require.resolve("react"),
        "styled-components": require.resolve("styled-components"),
        "react-dom": require.resolve("react-dom"),
      },
      ...config.resolve,
    };
    return config;
  },
};
