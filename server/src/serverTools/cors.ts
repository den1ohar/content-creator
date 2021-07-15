import cors from "cors";

const allowedOrigins = ["*", "http://localhost:3000"];

const corsSetup: cors.CorsOptions = {
  origin: allowedOrigins
};

export default corsSetup;
