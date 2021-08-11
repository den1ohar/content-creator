import { Request, Response } from "express";
import { ImageServices } from "../services";

class ImageController {
  async uploadImage(req: Request, res: Response) {
    try {
      const data = await ImageServices.writeImageOnDisk(req);

      if (!data) {
        return res.json({ message: "Something went wrong.", data: null });
      }

      const image = await ImageServices.saveImage(data);

      return res.json({ message: "Image uploaded. ", data: image });
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  }
}

export default new ImageController();
