/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Using modern `rgb`
				background: "rgb(var(--background))",
				foreground: "rgb(var(--foreground))",
			},
		},
	},
	plugins: [],
};
