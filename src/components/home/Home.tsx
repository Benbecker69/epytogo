"use client";

import { Navigation } from "@/components/navigation/HomeNav";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Title } from "@/components/ui/title";
import { useNavigation } from "@/hooks/useNavigation";
import { Service } from "@/services/Service";
import { PlaceResult } from "@/services/ServiceInterface";
import { useStore } from "@/store/useStore";
import { Search } from "lucide-react";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { CustomCard } from "./CustomCard";
import { SkeletonCard } from "./SkeletonCard";
import { useRouter } from "next/navigation";

export const Home = () => {
  const { navItemsHomePage } = useNavigation();
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { itemId } = useStore();
  const router = useRouter();

  const service = useMemo(
    () => new Service("https://places.googleapis.com", "POST"),
    []
  );

  const fetchPlaces = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let results;

      if (itemId === "restaurant") {
        results = await service.searchRestaurants({
          name: query,
        });
      } else if (itemId === "hotel") {
        results = await service.searchHotels({
          name: query,
        });
      } else {
        results = await service.searchRestaurantsAndHotels({
          name: query,
        });
      }

      console.log(results);

      setPlaces(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  }, [itemId, query, service]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPlaces();
  };

  const handlePlaceClick = (placeId: string) => {
    router.push(`/places/${placeId}`);
  };

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces, itemId]);

  return (
    <Container>
      <div className="mx-auto flex w-3/6 flex-col justify-center">
        <Title className="mb-4 text-center text-3xl font-bold" tag="h1">
          Découvrez Les Meilleurs Endroits
        </Title>
        <Navigation navItems={navItemsHomePage} />
        <form className="relative mt-4 flex w-full" onSubmit={handleSubmit}>
          <input
            className="h-11 w-full rounded-full border border-sky-600 px-10 outline-none"
            name="search"
            placeholder="Rechercher un restaurant..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search
            className="absolute bottom-1.5 left-3 -translate-y-1/2"
            size={16}
          />

          <Button className="absolute right-0 h-11 rounded-l-none rounded-r-full">
            Rechercher
          </Button>
        </form>
      </div>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      <div className="mt-10 grid grid-cols-3 gap-10 px-10">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} className="h-[300px] w-[380px]" />
            ))
          : places.map((place) => (
              <CustomCard
                key={place.id}
                className="min-h-[300px] w-[380px]"
                place={{
                  placeId: place.id,
                  name: place.displayName.text,
                  address: place.formattedAddress,
                  rating: place.rating || 0,
                  photo:
                    place.photos && place.photos.length > 0
                      ? place.photos[0].name
                      : "/placeholder-image.jpg",
                }}
                onClick={() => handlePlaceClick(place.id)}
              />
            ))}
      </div>
    </Container>
  );
};
