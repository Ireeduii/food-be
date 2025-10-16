// import connectDB from "@/app/lib/connectDb";
// import Food from "@/app/lib/models/Food";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   await connectDB();

//   const food = await Food.create({
//     foodName: "salad",
//     price: 2321,
//     ingredients: "mah, nogoo",
//     category: "68edc480a7c7b5a69867e9f9",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
//   });

//   return NextResponse.json({ message: "Success", data: food });
// };
import { getAllFoods, createFood } from "@/app/lib/services/food-service";
import { uploadImageToCloudinary } from "@/app/lib/utils/uploadImage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const categoryId = formData.get("categoryId") as string;
  const image = formData.get("image") as File;

  const uploadedUrl = await uploadImageToCloudinary(image);

  const result = await createFood(
    name,
    ingredients,
    Number(price),
    categoryId,
    uploadedUrl
  );

  if (result) {
    return NextResponse.json(
      { message: "Food item received successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Failed to create food" },
      { status: 400 }
    );
  }
}

export const GET = async () => {
  const foods = await getAllFoods();
  console.log(foods);
  return NextResponse.json({ message: "Hello" }, { status: 200 });
};
