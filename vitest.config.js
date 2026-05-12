import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    exclude: [
      ...configDefaults.exclude,
      './.next/*'
    ],
    environment: 'jsdom',
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    browser: {
      provider: playwright({
        launchOptions: {
          slowMo: 50,
          channel: 'chromium'
        },
        actionTimeout: 4_000,
        persistentContext: false
      }),
      enabled: true,
      instances: [
        {browser: 'chromium'}, // first priority (~71%)
        // {browser: 'webkit'}, // second most common because of Apple (14-15%)
        // {browser: 'firefox'}, // last priority (~2-3%)
      ]
    }
  }
})
