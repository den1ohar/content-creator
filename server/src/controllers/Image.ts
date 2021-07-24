import { ImageServices } from "../services";
import path from "path";
import fs from "fs";
const formidable = require("formidable");

//saveImage
class ImageController {
  async uploadImage(req, res) {
    const baseDir = global.__basedir;
    try {
      const form = new formidable.IncomingForm();
      const uploadDir = path.join(baseDir, "public", "files");
      form.multiples = true;
      form.uploadDir = uploadDir;
      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(400).json({
            data: null,
            error: err,
            message: "Something wrong"
          });
        }
        const file = files.image;
        const fileName = encodeURIComponent(file.name.replace(/\s/g, "-"));
        const newName = path.join(uploadDir, fileName);
        try {
          fs.renameSync(file.path, newName);
        } catch (e) {
          console.error(e);
        }
        const image = await ImageServices.saveImage(file);
        return res.json({ message: "Image uploaded. ", data: image });
      });
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  }
}

export default new ImageController();
