import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	theme: {
		extend: {
			backgroundImage: () => ({
				'primary-gradient': 'linear-gradient(to right, #d3959b, #bfe6ba)',
				'secondary-gradient': 'linear-gradient(53.22deg, #0F137B 16.09%, #00F0FF 192.11%)',
				'gold-gradient': 'linear-gradient(53.22deg, #FED500 26.09%, #FA00FF 160.11%)',
				'performer-banner-gradient': 'linear-gradient(rgba(17, 17, 17, 0) 34.99%, rgba(17, 17, 17, 0.5) 100%)',
				'dark-gradient': 'linear-gradient(0deg, rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.6))'
			})
		}
	},
	variants: {},
	plugins: [],
});
