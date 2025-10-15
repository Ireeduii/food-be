import connectDB from "../connectDb";
import FoodCategory from "../models/FoodCategory";

export const createCategory = async (name: string) => {
  await connectDB();
  const newCategory = new FoodCategory({ name });
  await newCategory.save();
  return newCategory;
};

export const getAllCategories = async () => {
  await connectDB();
  return await FoodCategory.find();
};
