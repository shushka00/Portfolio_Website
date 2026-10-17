import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

function getAllowedDevOrigins() {
  const hosts = new Set(["localhost", "127.0.0.1"]);

  for (const network of Object.values(os.networkInterfaces())) {
    for (const address of network ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        hosts.add(address.address);
      }
    }
  }

  return Array.from(hosts);
}

const nextConfig: NextConfig = {
  // The in-app browser may reach the dev server through a local network origin
  // rather than plain localhost. Allow current machine-local dev origins so
  // client-side bundles and HMR endpoints aren't blocked in development.
  allowedDevOrigins: getAllowedDevOrigins(),
  // A stray lockfile in the home folder otherwise makes Turbopack treat
  // ~ as the workspace root and watch the entire home directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
