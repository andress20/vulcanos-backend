import express from "express";
import { categoryController } from "../controllers";

const router = express.Router();

router.route("/").get(categoryController.list);
router.route("/").post(categoryController.create);
router.route("/:categoryId").get(categoryController.show);
router.route("/:categoryId").put(categoryController.update);
router.route("/:categoryId").delete(categoryController.remove);

export default router;
