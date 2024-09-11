"use client";

import { Service } from "@/services/Service";
import { PlaceResult } from "@/services/ServiceInterface";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Page({ params }: { params: { placeId: string } }) {
  const { placeId } = params;

  const [placeDetails, setPlaceDetails] = useState<PlaceResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const service = useMemo(
    () => new Service("https://places.googleapis.com", "POST"),
    []
  );

  const fetchPlaceDetails = async () => {
    if (!placeId) return;

    setLoading(true);
    setError(null);

    try {
      const results = await service.searchById({
        placeId: String(placeId),
      });

      if (results) {
        setPlaceDetails(results);
        console.log(results);
      } else {
        setError("Aucun détail trouvé pour cet endroit.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaceDetails();
  }, [placeId]);

  const formatTime = (hour: number, minute: number) => {
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${hour}:${formattedMinute}`;
  };

  const renderOpeningHours = (openingHours: any) => {
    if (!openingHours) return "Horaires d'ouverture non disponibles.";

    return (
      <div className="text-base space-y-2">
        <p className="font-semibold">
          <strong>Ouvert maintenant :</strong>{" "}
          {openingHours.openNow ? "Oui" : "Non"}
        </p>
        <ul className="list-disc ml-6 space-y-1">
          {openingHours.periods.map((period: any, index: number) => (
            <li key={index}>
              <strong>Jour {period.open.day} :</strong>{" "}
              {formatTime(period.open.hour, period.open.minute)} -{" "}
              {formatTime(period.close.hour, period.close.minute)}
            </li>
          ))}
        </ul>
        <p className="mt-2">
          <strong>Description des jours de la semaine :</strong>{" "}
          {openingHours.weekdayDescriptions.join(", ")}
        </p>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center text-xl font-semibold">
        Chargement des détails...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  if (!placeDetails) {
    return (
      <div className="text-center text-xl">
        Aucun détail trouvé pour cet endroit.
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-12">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {placeDetails.displayName.text}
        </h2>
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src={
              placeDetails.photos && placeDetails.photos.length > 0
                ? `https://places.googleapis.com/v1/${placeDetails.photos[0].name}/media?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&maxWidthPx=1000&maxHeightPx=750`
                : "/placeholder-image.jpg"
            }
            alt={placeDetails.displayName.text}
            className="w-full object-cover"
            width={1000}
            height={750}
          />
        </div>
        <div className="space-y-4 text-lg">
          <p>
            <strong>Adresse :</strong> {placeDetails.formattedAddress}
          </p>
          <p>
            <strong>Évaluation :</strong>{" "}
            {placeDetails.rating || "Non disponible"} / 5
          </p>
          <p>
            <strong>Numéro de téléphone :</strong>{" "}
            {placeDetails.internationalPhoneNumber || "Non disponible"}
          </p>
          <div>
            <strong>Horaires d&apos;ouverture :</strong>{" "}
            {renderOpeningHours(placeDetails.currentOpeningHours)}
          </div>
        </div>
      </div>
    </div>
  );
}
