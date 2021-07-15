const port = process.env.PORT || 3001;
const host = process.env.HOST || "/api";
const sessionSecret =
  process.env.SESSION_SECRET || "content-creator-session-secret-key";
const secretKey = process.env.SECRET_KEY || "content-creator node js";
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_HOST || "localhost";
const baseApiUrl = process.env.AUTH_BASE_API_URL || "/api";

export {
  port,
  host,
  sessionSecret,
  secretKey,
  redisPort,
  redisHost,
  baseApiUrl
};
