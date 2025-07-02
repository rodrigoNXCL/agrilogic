// vite.config.js
module.exports = async () => {
  // Cargamos vite y el plugin React como módulos ESM
  const { defineConfig } = await import("vite");
  const react = (await import("@vitejs/plugin-react")).default;

  return defineConfig({
    plugins: [react()],
    server: {
      port: 5173,
    },
  });
};
