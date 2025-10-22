import connectDB from "@/app/lib/connectDb";
import bcrypt from "bcrypt";
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  await connectDB();

  const body = await request.json();
  const { password, email } = body;
  const hashPassword = bcrypt.hashSync(password, 10);

  console.log("Password", password);
  console.log("hashPassword", hashPassword);

  const user = await User.create({
    email: email,
    password: hashPassword,
    role: "USER",
  });
  return NextResponse.json({ message: "success created user", user });
};
