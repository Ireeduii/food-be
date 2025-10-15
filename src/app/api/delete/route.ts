import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { categoryId } = body;

  const response = NextResponse.json({ data: categoryId }, { status: 200 });

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
};
