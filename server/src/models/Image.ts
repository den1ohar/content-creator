import sequelize from "../database";
import { DataTypes } from "sequelize";
const { UUID, STRING, BLOB } = DataTypes;

const Image = sequelize.define("image", {
  id: { type: UUID, primaryKey: true },
  type: {
    type: STRING
  },
  name: {
    type: STRING
  },
  data: {
    type: BLOB("long")
  }
});

export default Image;
