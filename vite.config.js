import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/React-hw/',
    plugins: [
        react()
    ],
    server: {
        fs: {
            strict: false
        },
        proxy: {
            // Proxy API requests if needed
        }
    }
});