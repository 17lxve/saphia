import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_DISTANT_API': JSON.stringify(env.REACT_APP_DISTANT_API),
      'process.env.REACT_APP_LOCAL_API': JSON.stringify(env.REACT_APP_LOCAL_API),
    },
    plugins: [react()]
  }
})