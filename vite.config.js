import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/scss/variables/color.scss";
        @import "./src/scss/variables/font.scss";
        @import "./src/scss/helpers/mediaquery.scss";
        @import "./src/scss/helpers/sizemixins.scss";
        @import "./src/scss/helpers/layoutmixins.scss";
      `
      }
    }
  }
})
