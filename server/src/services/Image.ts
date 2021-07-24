import Image from "../models/Image";

class ImageServices {
  async saveImage(file) {
    try {
      const image = await Image.create({
        type: file.mimetype,
        name: file.originalname,
        path: file.path
      });

      return image;
    } catch (error) {
      return `Error when trying upload images: ${error}`;
    }
  }
}

export default new ImageServices();
