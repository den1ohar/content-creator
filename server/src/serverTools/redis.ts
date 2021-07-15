import redis from "redis";
import { redisHost, redisPort } from "../configuration";
import session from "express-session";
import connectRedis from "connect-redis";

const redisClient = redis.createClient({
  port: redisPort,
  host: redisHost
});

redisClient.on("error", function (err) {
  console.warn("Could not establish a connection with redis. " + err);
});

redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

const RedisStore = connectRedis(session);

export { redisClient, RedisStore };
