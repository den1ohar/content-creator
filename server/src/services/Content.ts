import Content from "../models/Content";

class ContentServices {
  async createNewContent(arg) {
    try {
      // const newTraining = await Training.create(
      //   {
      //     userId: id,
      //     date,
      //     name
      //   },
      //   {
      //     returning: true,
      //     plain: true
      //   }
      // );
      // return {
      //   data: newTraining,
      //   message: "Training created is successfully."
      // };

      return {
        data: arg
      };
    } catch (e) {
      return {
        data: null,
        message: `${e}`
      };
    }
  }
  async updateContent(data) {
    return {
      data
    };
  }
  async getContentByLanguage(language) {
    try {
      // const newTraining = await Training.create(
      //   {
      //     userId: id,
      //     date,
      //     name
      //   },
      //   {
      //     returning: true,
      //     plain: true
      //   }
      // );
      // return {
      //   data: newTraining,
      //   message: "Training created is successfully."
      // };

      return {
        data: language
      };
    } catch (e) {
      return {
        data: null,
        message: `${e}`
      };
    }
  }

  async uploadImage(img) {
    return {
      data: img
    };
  }
}

export default new ContentServices();
