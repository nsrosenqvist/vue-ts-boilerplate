import type { Config } from 'tailwindcss';
import { resolve } from 'path';

export default {
  content: [
    resolve(__dirname, 'index.html'),
    resolve(__dirname, 'src/**/*.{vue,ts}'),
    resolve(__dirname, 'node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'),
  ],
} satisfies Config;
