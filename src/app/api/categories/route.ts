// import { NextResponse } from "next/server";
// import { categories } from "@/app/api/categories/data";
// import { createCategory } from "@/app/lib/services/category-services";

// export async function GET() {
//   const response = NextResponse.json({ data: categories }, { status: 200 });
//   response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
//   response.headers.set(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   response.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   return response;
// }

// export async function POST(req: Request) {
//   console.log("Category Post");
//   const body = await req.json();
//   const { newCategory } = body;
//   // categories.push(newCategory);
//   await createCategory(newCategory);
//   const response = NextResponse.json({ data: newCategory }, { status: 200 });
//   return response;
// }

import FoodCategory from "@/app/lib/models/FoodCategory";
import connectDB from "@/app/lib/connectDb";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const category = await FoodCategory.find();

  return NextResponse.json(category);
};

export const POST = async (request: Request) => {
  await connectDB();
  const body = await request.json();

  const category = await FoodCategory.create({
    categoryName: body.categoryName,
  });

  return NextResponse.json({ message: "Success", category });
};
