import os from 'os';

export const getServerHealth = () => ({
  uptimeSeconds: Math.floor(process.uptime()),
  memoryUsageMB: Math.round(process.memoryUsage().rss / (1024 * 1024) * 100) / 100,
  cpuCount: os.cpus().length,
  platform: os.platform(),
});

export const registerHealthEndpoint = (app) => {
  app.get('/health', (_req, res) => {
    res.json(getServerHealth());
  });
};
