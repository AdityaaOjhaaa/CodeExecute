import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const allowedHosts = [
  "localhost",
  "127.0.0.1",
  "5e40d533-50dc-4cc6-8261-93eb42642588-00-1jk6vuubv5k5e.sisko.replit.dev",
  "c1ad3f31-c2e1-4f4a-b723-c4275c8fad5a-00-336ijj0remvzb.sisko.replit.dev",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <-- CRUCIAL FOR PRODUCTION DEPLOYMENT
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    allowedHosts,
  },
});
