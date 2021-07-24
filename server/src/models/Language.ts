import sequelize from "../database/";

import { DataTypes } from "sequelize";
const { INTEGER, STRING } = DataTypes;

const Language = sequelize.define("language", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  language: { type: STRING, unique: true, allowNull: false }
});

export default Language;
