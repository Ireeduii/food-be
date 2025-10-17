import FoodSchema from "@/app/lib/models/Food";
import connectDB from "@/app/lib/connectDb";
import { FoodType } from "../utils/types";
import Food from "@/app/lib/models/Food";

export const getAllFoods = async (): Promise<FoodType[]> => {
  await connectDB();
  // const allFoods: FoodType[] = await FoodSchema.find({});
  // return allFoods;
  const allFoods: FoodType[] = await Food.find({}).populate("categoryId");
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
