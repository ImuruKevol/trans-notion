module.exports = {
  env: {
    URL: process.env.URL,
  },
  webpack(config) {
		config.resolve.modules.push(__dirname);
		return config;
	}
}
