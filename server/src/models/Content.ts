import sequelize from "../database";
import { DataTypes } from "sequelize";
const { UUID, STRING } = DataTypes;

const Content = sequelize.define("content", {
  id: { type: UUID, primaryKey: true },
  textTitle: { type: STRING },
  textParagraph: { type: STRING(1234) },
  headTitle: { type: STRING },
  headDesc: { type: STRING(1234) }
});

export default Content;
