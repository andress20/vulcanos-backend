// model
import Category from "../models/category.model";

const create = async (req: any, res: any) => {
  try {
    const { name, image } = req.body;
    const category = new Category({
      name,
      image,
    });
    await category.save();
    res
      .status(200)
      .json({ message: `Nueva Categoria ${category.name} creada` });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
};

const list = async (_req: any, res: any) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: "Categories found", data: categories });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const show = async (req: any, res: any) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    res.status(200).json({ message: "Category found", data: category });
  } catch (error) {
    res.status(400).json({ message: "Category not found" });
  }
};

const update = async (req: any, res: any) => {
  const { categoryId } = req.params;

  try {
    const categoryUpdated = await Category.findByIdAndUpdate(
      categoryId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Category updated", data: categoryUpdated });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const remove = async (req: any, res: any) => {
  const { categoryId } = req.params;
  try {
    const categoryDeleted = await Category.findByIdAndDelete(categoryId);
    res.status(200).json({
      message: "Category deleted successfully",
      dataDeleted: categoryDeleted,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong, Category could not be deleted" });
  }
};

export { create, list, show, update, remove };
