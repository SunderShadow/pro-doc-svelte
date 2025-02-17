import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import autoprefixer from 'autoprefixer'

export default defineConfig({
	plugins: [
        sveltekit(),
        enhancedImages()
    ],
});
