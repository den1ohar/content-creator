import sequelize from "../database";
import { DataTypes } from "sequelize";
const { UUID, STRING } = DataTypes;

const Content = sequelize.define("content", {
  id: { type: UUID, primaryKey: true },
  text: { type: STRING }
});

export default Content;
