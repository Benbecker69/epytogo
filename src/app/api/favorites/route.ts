import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });

    return NextResponse.json(favorites, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    );
  }
}
