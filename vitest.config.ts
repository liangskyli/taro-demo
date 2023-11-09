import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./__test__/**/*.test.{ts,tsx,js}'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    alias: {
      '@': './src',
      '@tarojs/components': '@tarojs/components/lib/react/component-lib',
    },
    globals: true,
    testTimeout: 1000 * 60,
  },
});
