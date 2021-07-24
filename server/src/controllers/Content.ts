import { ContentServices, LanguageServices, PageServices } from "../services";

class ContentController {
  async createContent(req, res) {
    try {
      const { language, page } = req.query;

      const currentPage = await PageServices.findOrCreatePage(page);

      const currentLanguage = await LanguageServices.findOrCreateLanguage(
        language
      );

      const pageId = currentPage.dataValues.id;
      const languageId = currentLanguage.dataValues.id;

      const content = await ContentServices.getContent(page, language);

      if (content) {
        return res.json({ data: null, message: "Content created before." });
      }

      const newContent = await ContentServices.createNewContent(
        language,
        page,
        pageId,
        languageId,
        req.body
      );

      return res.json({
        data: newContent,
        message: "Content created successfully."
      });
    } catch (e) {
      return res.json({ message: `${e}`, data: {} });
    }
  }
  async updateContent(req, res) {
    try {
      const { language, page } = req.query;

      await ContentServices.updateContent(req.body, language, page);
      const updatedContent = await ContentServices.getContent(page, language);

      return res.json({
        data: updatedContent,
        message: "Content updated is succesfully."
      });
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  }
  async getContent(req, res) {
    const { language, page }: { language: string; page: string } = req.query;
    try {
      const content = await ContentServices.getContent(page, language);

      return res.json({ data: content, message: "Get content." });
    } catch (e) {
      return res.json({ message: `${e}`, data: null });
    }
  }
}

export default new ContentController();
