import express from "express";
import { productController } from "../controllers";

const router = express.Router();

router.route("/").get(productController.list);
router.route("/").post(productController.create);
router.route("/:categoryId").get(productController.show);
router.route("/:categoryId").put(productController.update);
router.route("/:categoryId").delete(productController.remove);

export default router;
