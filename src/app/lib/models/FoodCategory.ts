// import mongoose, { Schema } from "mongoose";

// type CategorySchemaType = {
//   name: string;
// };

// const CategorySchema = new Schema({
//   name: String,
// });

// export const Category =
//   mongoose.models.Category ||
//   mongoose.model<CategorySchemaType>("Category", CategorySchema);
import { Schema, model, models } from "mongoose";

const FoodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const FoodCategory =
  models.FoodCategory || model("FoodCategory", FoodCategorySchema);

export default FoodCategory;
