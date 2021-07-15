import Server from "./serverTools/index";
import { port, host } from "./configuration";

const startServer = new Server()
  .start(port)
  .then((port) => console.log(`Server is running on: ${port}`))
  .catch((error) => {
    console.log(error);
  });

export default startServer;
