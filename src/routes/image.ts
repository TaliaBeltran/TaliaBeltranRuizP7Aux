import {  Router } from "express";
import {  imageControllers } from "../controllers/image";

const router = Router();

router.get("/:filename", imageControllers.getImage);
router.post("/new", imageControllers.newImage);

export default router;