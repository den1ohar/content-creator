import Content from "./Content";
import Image from "./Image";

Content.hasOne(Image);
Image.belongsTo(Content);

export default { Content, Image };

/*
- text title
- text paragraph
- image
- head title
- head description
*/
