import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { placeId: string } }
) {
  const { placeId } = params;
  const { userId, placeName, address, photo } = await req.json();

  if (!userId || !placeId || !placeName || !address) {
    return NextResponse.json(
      { error: "UserId, PlaceId, PlaceName and Address are required" },
      { status: 400 }
    );
  }

  try {
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: userId,
        placeId: placeId,
      },
    });

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      });
      return NextResponse.json(
        { message: "Favorite deleted successfully" },
        { status: 200 }
      );
    } else {
      const favorite = await prisma.favorite.create({
        data: {
          userId: userId,
          placeId: placeId,
          placeName: placeName,
          address: address,
          photo: photo || null,
        },
      });
      return NextResponse.json(favorite, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create favorite" },
      { status: 500 }
    );
  }
}
