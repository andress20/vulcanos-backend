// schema

import { Schema, model, Model } from "mongoose";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  category: any;
}

const productSchema = new Schema<Product, Model<Product>>(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return /[a-z\s]{0,255}/.test(v); // regex validation
        },
        message: (props) => `${props.value} No es un nombre valido!`,
      },
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: [0, "Valor del producto debe ser mayor a Cero"],
      max: 100000,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = model<Product, Model<Product>>("Product", productSchema);

export default Product;
