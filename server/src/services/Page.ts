import Page from "../models/Page";

class PageServices {
  async findOrCreatePage(page: string) {
    try {
      const findedPage = await Page.findOne({ where: { page } });

      if (!findedPage) {
        const createdLan = await Page.create(
          { page },
          {
            returning: true,
            plain: true
          }
        );

        return createdLan;
      }

      return findedPage;
    } catch (e) {
      return {
        data: null,
        message: `${e}`
      };
    }
  }
}

export default new PageServices();
