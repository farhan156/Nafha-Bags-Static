let userConfig = undefined;
try {
  userConfig = require('./v0-user-next.config');
} catch (e) {
  // Ignore if the file doesn't exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(baseConfig, overrideConfig) {
  if (!overrideConfig) return;

  for (const key in overrideConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key]) &&
      overrideConfig[key] !== null
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...overrideConfig[key],
      };
    } else {
      baseConfig[key] = overrideConfig[key];
    }
  }
}

module.exports = nextConfig;
