import sequelize from "../database/";

import { DataTypes } from "sequelize";
const { INTEGER, STRING } = DataTypes;

const Page = sequelize.define("page", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  page: { type: STRING, unique: true, allowNull: false }
});

export default Page;
