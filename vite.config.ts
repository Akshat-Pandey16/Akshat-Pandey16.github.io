import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteImagemin from 'vite-plugin-imagemin';
import VitePurgeIcons from 'vite-plugin-purge-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteImagemin(),VitePurgeIcons()],
})
