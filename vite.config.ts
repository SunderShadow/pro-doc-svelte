import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
	plugins: [
        sveltekit(),
        mkcert(),
        enhancedImages()
    ],
});
