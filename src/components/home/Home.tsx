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
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { CustomCard } from "./CustomCard";
import { SkeletonCard } from "./SkeletonCard";

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
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center px-4 md:px-0">
        <Title className="mb-4 text-center text-2xl md:text-3xl font-bold" tag="h1">
          Découvrez Les Meilleurs Endroits
        </Title>
        <Navigation navItems={navItemsHomePage} />
        <form className="relative mt-4 flex w-full" onSubmit={handleSubmit}>
          <input
            className="h-11 w-full rounded-full border border-sky-600 px-10 pr-20 outline-none"
            name="search"
            placeholder="Rechercher un endroit..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            size={20}
          />

          <Button className="absolute right-0 h-11 rounded-l-none rounded-r-full">
            Rechercher
          </Button>
        </form>
      </div>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      <div className="mt-10 grid gap-6 px-4 md:px-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} className="h-[300px] w-full" />
            ))
          : places.map((place) => (
              <CustomCard
                key={place.id}
                className="min-h-[300px] w-full"
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
