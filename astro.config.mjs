import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      "process.env.OPENAI_API_KEY": process.env.OPENAI_API_KEY
    }
  }
});