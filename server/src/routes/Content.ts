import Router from "express";
import { ContentController, ImageController } from "../controllers";

const router = Router();

const { createContent, getContent, updateContent } = ContentController;
const { uploadImage } = ImageController;

router.post("/api/content", createContent);
router.put("/api/content", updateContent);
router.get("/api/content", getContent);
router.post("/api/content/image", uploadImage);

export default router;
