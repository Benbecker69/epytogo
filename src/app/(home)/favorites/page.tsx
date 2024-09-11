"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function FavoritesPage() {
  const { data: session } = useSession();
  const { currentUser, setCurrentUser } = useStore();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    try {
      const response = await fetch(`/api/favorites?userId=${currentUser?.id}`);
      if (!response.ok) throw new Error("Failed to fetch favorites");

      const data = await response.json();
      setFavorites(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (session?.user) {
      setCurrentUser(session.user);
      fetchFavorites();
    }
  }, [fetchFavorites, session, setCurrentUser]);

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold">
        Chargement des favoris...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  if (!favorites.length) {
    return (
      <div className="text-center text-lg">
        Vous n&apos;avez pas de favoris.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-12 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Mes Favoris</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="p-4 bg-white shadow-lg rounded-lg">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={
                  favorite.place.photos && favorite.place.photos.length > 0
                    ? `https://places.googleapis.com/v1/${favorite.place.photos[0].name}/media?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&maxWidthPx=400&maxHeightPx=300`
                    : "/placeholder-image.jpg"
                }
                alt={favorite.place.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{favorite.place.name}</h3>
            <p className="text-gray-600 mb-4">{favorite.place.address}</p>
            <Button
              className="mt-auto"
              onClick={() => alert(`Go to details for ${favorite.placeId}`)}
            >
              Voir les détails
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
