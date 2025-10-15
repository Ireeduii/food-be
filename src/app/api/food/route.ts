import connectDB from "@/app/lib/connectDb";
import Food from "@/app/lib/models/Food";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();

  const food = await Food.create({
    foodName: "salad",
    price: 2321,
    ingredients: "mah, nogoo",
    category: "68edc480a7c7b5a69867e9f9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
  });

  return NextResponse.json({ message: "Success", data: food });
};
