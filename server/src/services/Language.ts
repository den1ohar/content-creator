import Language from "../models/Language";

class LanguageServices {
  async findOrCreateLanguage(language: string) {
    try {
      const findedLan = await Language.findOne({ where: { language } });

      if (!findedLan) {
        const createdLan = await Language.create(
          { language },
          {
            returning: true,
            plain: true
          }
        );
        return createdLan;
      }

      return findedLan;
    } catch (e) {
      return {
        data: null,
        message: `${e}`
      };
    }
  }
}

export default new LanguageServices();
