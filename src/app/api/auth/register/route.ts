import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import db from "@/lib/prisma";
import { IResponseUser } from "@/app/interfaces";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.username || !data.email || !data.password) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // Check if user already exists
    const user = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailExists) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // Check if password is valid
    if (data.password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const userData: IResponseUser = { ...newUser };
    delete userData.password;

    return NextResponse.json(userData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
