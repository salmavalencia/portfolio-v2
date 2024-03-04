import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { data } = await req.json();
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
