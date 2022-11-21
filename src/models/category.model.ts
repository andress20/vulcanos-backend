// schema

import { Schema, model, Model } from "mongoose";

interface Category {
  name: string;
  image: string;
}

const categorySchema = new Schema<Category, Model<Category>>(
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
      image: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Category = model<Category, Model<Category>>("Category", categorySchema);

export default Category;
