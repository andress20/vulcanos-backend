// model
import Product from "../models/product.model";

const create = async (req: any, res: any) => {
  try {
    const { name, description, price, image, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
    });
    await newProduct.save();
    res.status(200).json({
      message: `Nuevo Producto ${newProduct.name} creado`,
      data: newProduct,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const list = async (_req: any, res: any) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "products found", data: products });
  } catch (error) {
    res.status(404).json({ message: "products not found" });
  }
};

const show = async (req: any, res: any) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.status(200).json({ message: "product found", data: product });
  } catch (error) {
    res.status(404).json({ message: "product not found", details: error });
  }
};

const update = async (req: any, res: any) => {
  const { productId } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Product Updated successully", data: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong in product update" });
  }
};

const remove = async (req: any, res: any) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    res
      .status(200)
      .json({
        message: "product deleted successfully",
        dataDeleted: deletedProduct,
      });
  } catch (error) {
    res
      .status(400)
      .json({ message: "something went wrong, product could not be deleted" });
  }
};

export { create, list, show, update, remove };
