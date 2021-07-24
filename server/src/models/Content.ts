import sequelize from "../database";
import { DataTypes } from "sequelize";
const { INTEGER, STRING } = DataTypes;

const Content = sequelize.define("content", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  textTitle: { type: STRING },
  textParagraph: { type: STRING(1234) },
  headTitle: { type: STRING },
  headDesc: { type: STRING(1234) },
  languageName: { type: STRING },
  pageName: { type: STRING }
});

export default Content;
