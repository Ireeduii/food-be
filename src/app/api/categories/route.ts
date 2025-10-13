import { NextResponse } from "next/server";
import { categories } from "@/app/api/categories/data";
import { createCategory } from "@/app/lib/services/category-services";

export async function GET() {
  const response = NextResponse.json({ data: categories }, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*"); // Or '*' for all origins
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

export async function POST(req: Request) {
  console.log("Category Post");
  const body = await req.json();
  const { newCategory } = body;
  // categories.push(newCategory);
  await createCategory(newCategory);
  const response = NextResponse.json({ data: newCategory }, { status: 200 });
  return response;
}
