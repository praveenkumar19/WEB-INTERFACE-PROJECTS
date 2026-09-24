import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/WEB-INTERFACE-PROJECTS/',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project2: 'project2/index.html'
      }
    }
  }
})