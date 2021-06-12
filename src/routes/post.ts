import { Router } from "express";
import { postControllers } from "../controllers/post";
import post from "../models/post";

const router = Router();

router.get("/", postControllers.index);
router.post("/new", postControllers.newPost);
router.put("/edit/:id", postControllers.editPost);
router.delete("/delete/:id", postControllers.deletePost);

export default router;