import tsconfigPaths from 'vite-tsconfig-paths';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), sentryVitePlugin({
        org: 'jsm-x9',
        project: 'javascript-react',
    })],

    build:{
        sourcemap: true
    },

    assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.mp4', '**/*.svg']
});
