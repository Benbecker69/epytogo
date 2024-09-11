import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";

export const CustomCard = ({
  place,
  className,
  onClick,
}: {
  place: {
    placeId: string;
    name: string;
    address: string;
    rating: number;
    photo: string;
  };
  className?: string;
  onClick?: () => void;
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const photoUrl = `https://places.googleapis.com/v1/${place.photo}/media?key=${apiKey}&maxWidthPx=500&maxHeightPx=360`;

  return (
    <Card
      key={place.placeId}
      className={cn(
        "relative flex cursor-pointer justify-center border-none shadow-none transition-opacity hover:opacity-90",
        className
      )}
      onClick={onClick}
    >
      <CardTitle className="absolute bottom-24 z-10 text-3xl text-white drop-shadow-lg">
        {place.name}
      </CardTitle>
      <Image
        alt={place.name}
        className="h-[360px] w-full rounded-md object-cover"
        src={photoUrl}
        width={500}
        height={360}
      />
      <CardContent className="absolute bottom-0 flex w-full flex-col justify-between bg-white/90 py-4">
        <p className="font-semibold line-clamp-2">{place.address}</p>
        <div className="mt-2 flex items-center">
          <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-bold">{place.rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
