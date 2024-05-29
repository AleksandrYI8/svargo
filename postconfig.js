module.exports = {
    plugins: [
      require('autoprefixer'),
    ],
  };
  
  import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
});
