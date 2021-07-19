import { ContentServices } from "../services";

class ContentController {
  async createContent(req, res) {
    try {
      const newContent = await ContentServices.createNewContent(req.body);

      return res.json({ data: newContent });
    } catch (e) {
      return res.json({ message: `${e}`, data: {} });
    }
  }
  async updateContent(req, res) {
    try {
      const newContent = await ContentServices.updateContent(req.body);

      return res.json({ data: newContent });
    } catch (e) {
      return res.json({ message: `${e}`, data: {} });
    }
  }
  async getContent(req, res) {
    try {
      const content = await ContentServices.getContentByLanguage(
        req.params.language
      );

      return res.json({ data: content });
    } catch (e) {
      return res.json({ message: `${e}`, data: {} });
    }
  }
  async uploadImage(req, res) {
    try {
      const content = await ContentServices.uploadImage(req.params.language);

      return res.json({ data: content });
    } catch (e) {
      return res.json({ message: `${e}`, data: {} });
    }
  }
}

export default new ContentController();
