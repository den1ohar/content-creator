import sequelize from "../database";
import { DataTypes } from "sequelize";
const { INTEGER, STRING } = DataTypes;

const Image = sequelize.define("image", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  type: {
    type: STRING
  },
  name: {
    type: STRING
  },
  path: {
    type: STRING
  },
  contentId: {
    type: INTEGER
  }
});

export default Image;
