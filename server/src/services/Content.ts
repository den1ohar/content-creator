import Content from "../models/Content";

class ContentServices {
  async createNewContent(
    language: string,
    page: string,
    pageId: number,
    languageId: number,
    body: any
  ) {
    try {
      const newContent = await Content.create(
        {
          pageId,
          languageId,
          languageName: language,
          pageName: page,
          ...body
        },
        {
          returning: true,
          plain: true
        }
      );
      return newContent;
    } catch (e) {
      return {
        data: null,
        message: `${e}`
      };
    }
  }
  async updateContent(data, language: string, page: string) {
    try {
      await Content.update(
        { ...data },
        {
          where: {
            languageName: language,
            pageName: page
          }
        }
      );
    } catch (e) {
      return e;
    }
  }
  async getContent(page: string, language: string) {
    try {
      const content = await Content.findOne(
        {
          where: {
            pageName: page,
            languageName: language
          }
        },
        {
          returning: true,
          plain: true
        }
      );
      return content;
    } catch (e) {
      return e;
    }
  }

  async uploadImage(img) {
    return {
      data: img
    };
  }
}

export default new ContentServices();
