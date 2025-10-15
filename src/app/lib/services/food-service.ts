import FoodSchema from "@/app/lib/models/Food";
import connectDB from "@/app/lib/connectDb";
import { FoodType } from "../utils/types";

export const getAllFoods = async (): Promise<FoodType[]> => {
  await connectDB();
  const allFoods: FoodType[] = await FoodSchema.find({});
  return allFoods;
};

export const createFood = async (
  name: string,
  ingredients: string,
  price: number,
  categoryId: string,
  imageUrl: string
) => {
  await connectDB();
  const newFood = new FoodSchema({
    name,
    ingredients,
    price,
    categoryId,
    imageUrl,
  });
  await newFood.save();
  return true;
};
