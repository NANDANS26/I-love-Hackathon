import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(async () => {
  const tailwindConfig = await import('./tailwind.config.cjs');
  return {
    css: {
      postcss: {
        plugins: [
          tailwindcss(tailwindConfig),
          autoprefixer(),
        ],
      },
    },
  };
});
