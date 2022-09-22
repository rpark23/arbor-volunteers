/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/",
        destination: "https://goodrx.com",
      },
    ];
  };
  return {
    rewrites,
  };
};