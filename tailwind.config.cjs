/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary':'#F6F6F6',
				'secondary':'#331a33',
				'accent':'#da62c4'
			},
			container:{
				center:true
			}
		},
	},
	plugins: [],
}
