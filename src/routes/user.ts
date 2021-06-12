import { Router } from "express";
import { userControllers } from "../controllers/user";
import { authToken } from "../libs/authToken";

const router = Router();

router.get("/", userControllers.index);
router.get("/profile/:id", authToken, userControllers.profile);
router.post("/signUp", userControllers.signUp);
router.post("/signIn", userControllers.signIn);
router.put("/edit/:id", userControllers.edit);
router.delete("/delete/:id", userControllers.delete);
export default router;