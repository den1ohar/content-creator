import { sessionSecret } from "../configuration";
import { redisClient, RedisStore } from "./redis";

const sessionSetup = {
  store: new RedisStore({ client: redisClient }),
  secret: sessionSecret,
  resave: false,
  saveInitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 30
  }
};

export default sessionSetup;
