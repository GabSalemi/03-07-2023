import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        // Various Variables 
        @import "./src/scss/variables/color.scss";
        @import "./src/scss/variables/spacing.scss";
        @import "./src/scss/variables/border.scss";

        // Helpers
        @import "./src/scss/helpers/mediaquery.scss";
        @import "./src/scss/helpers/sizemixins.scss";
        @import "./src/scss/helpers/functions.scss";
        @import "./src/scss/helpers/extends.scss";

        // Layout
        @import "./src/scss/layout/layoutmixins.scss";
        @import "./src/scss/layout/columns.scss";

        // Typography
        @import "./src/scss/typography/font.scss";
        @import "./src/scss/typography/typextends.scss";
      `
      }
    }
  }
})
