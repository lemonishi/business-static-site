import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { config } from "dotenv";

config();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
