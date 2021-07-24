import Content from "./Content";
import Image from "./Image";
import Language from "./Language";
import Page from "./Page";

Page.hasMany(Content);
Content.belongsTo(Page);

Page.hasMany(Language);
Language.belongsToMany(Page, { through: "pageLanguage" });

Language.hasMany(Content);
Content.belongsTo(Language);

Content.hasOne(Image);
Image.belongsTo(Content);

export default { Content, Image, Language, Page };

/*
- text title
- text paragraph
- image
- head title
- head description
*/
