import { Router, Request, Response } from "express";
import UserRoutes from "./user";
import PostRoutes from "./post";
const router = Router();

router.use("/user", UserRoutes);
router.use("/post", PostRoutes);

export default router;