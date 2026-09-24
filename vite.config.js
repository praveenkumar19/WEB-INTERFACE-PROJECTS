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
        project1: 'project1/index.html',
        project2: 'project2/index.html',
        project3: 'project3/index.html',
        project4: 'project4/index.html',
        project5: 'project5/index.html',
        project6: 'project6/index.html',
        project7: 'project7/index.html',
        project8: 'project8/index.html',
        project9: 'project9/index.html',
        project10: 'project10/index.html'
      }
    }
  }
})