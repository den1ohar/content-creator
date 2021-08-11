import { Request } from "express";
import Image from "../models/Image";
import path from "path";
import fs from "fs";
const formidable = require("formidable");
class ImageServices {
  async writeImageOnDisk(req: Request): Promise<any> {
    const form = new formidable.IncomingForm();

    const baseDir: any = global.__basedir;
    const uploadDir: string = path.join(baseDir, "public", "files");

    form.multiples = true;
    form.uploadDir = uploadDir;
    form.newPath = "";

    return new Promise(function (resolve, reject) {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          return {
            data: null,
            error: err,
            message: "Something wrong"
          };

          // reject(err)
        }
        const file = await files.image;
        const fileName = encodeURIComponent(file.name.replace(/\s/g, "-"));
        const newName: string = path.join(uploadDir, fileName);

        file.url = newName;

        try {
          fs.renameSync(file.path, newName);
        } catch (err) {
          return {
            data: null,
            error: err,
            message: "Something wrong"
          };
        }

        return resolve({ fields, files });
      });
    });
  }

  async saveImage(data: any): Promise<any> {
    const { files } = data;
    const { image } = files;
    try {
      const imageData = await Image.create({
        type: image.type,
        name: image.originalname,
        path: image.url
      });
      return imageData;
    } catch (error) {
      return `Error when trying upload images: ${error}`;
    }
  }
}

export default new ImageServices();
