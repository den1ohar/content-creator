import Router from "express";
import { ContentController } from "../controllers";

const router = Router();

const { createContent, getContent, updateContent, uploadImage } =
  ContentController;

router.post("/api/content", createContent);
router.put("/api/content", updateContent);
router.get("/api/content", getContent);
router.post("/api/content/image", uploadImage);

export default router;
