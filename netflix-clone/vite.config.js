import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-2025-react.js/", // 👈 IMPORTANT: must match your repo name
});
