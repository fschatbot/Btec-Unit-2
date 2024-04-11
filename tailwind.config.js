/** @type {import('tailwindcss').Config} */

const flatten = (obj, sep = "-") =>
	Object.assign(
		{},
		...(function _flatten(o, p = "") {
			return [].concat(...Object.keys(o).map((k) => (typeof o[k] === "object" ? _flatten(o[k], k + sep) : { [p + k]: o[k] })));
		})(obj)
	);

module.exports = {
	content: ["*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"container-bg": "#D9D9D9",
				"container-txt": "#FFFFFF",
			},
		},
	},
	plugins: [
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-stripes": (value) => ({
						backgroundImage: `linear-gradient(45deg, ${value} 12.50%, transparent 12.50%, transparent 50%, ${value} 50%, ${value} 62.50%, transparent 62.50%, transparent 100%)`,
						backgroundSize: "5.66px 5.66px",
					}),
				},
				{ values: flatten(theme("colors")) }
			);
		},
	],
};
