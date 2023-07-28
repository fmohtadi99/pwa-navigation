const path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname)],
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	mode: "production",
};
