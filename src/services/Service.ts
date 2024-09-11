import { PlaceResult, ServiceInterface } from "./ServiceInterface";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export class Service implements ServiceInterface {
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  constructor(public baseUrl: string, public method: Method) {
    this.baseUrl = baseUrl;
    this.method = method;
  }

  async searchByText({
    query,
    type,
    name = "",
  }: {
    query: string;
    type: string;
    name?: string;
  }): Promise<PlaceResult[]> {
    let textQuery = `${type} in ${query}`;

    if (name) {
      textQuery = `${name} ${type} in ${query}`;
    }

    const url = `${this.baseUrl}/v1/places:searchText`;
    const body = JSON.stringify({
      textQuery,
      includedType: type,
    });

    const response = await fetch(url, {
      method: "POST",
      // @ts-ignore
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": this.apiKey,
        "X-Goog-FieldMask":
          "places.displayName,places.formattedAddress,places.location,places.rating,places.photos,places.currentOpeningHours,places.internationalPhoneNumber,places.id",
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.places;
  }

  async searchRestaurants({
    name = "",
  }: {
    name?: string;
  }): Promise<PlaceResult[]> {
    return this.searchByText({
      query: "Egypt",
      type: "restaurant",
      name,
    });
  }

  async searchHotels({ name = "" }: { name?: string }): Promise<PlaceResult[]> {
    return this.searchByText({
      query: "Egypt",
      type: "lodging",
      name,
    });
  }

  async searchRestaurantsAndHotels({
    name = "",
  }: {
    name?: string;
  }): Promise<PlaceResult[]> {
    const restaurants = await this.searchRestaurants({
      name,
    });

    const hotels = await this.searchHotels({
      name,
    });

    return [...restaurants, ...hotels];
  }

  async searchById({ placeId }: { placeId: string }): Promise<PlaceResult> {
    const url = `${this.baseUrl}/v1/places/${placeId}`;
    const response = await fetch(url, {
      method: "GET",
      // @ts-ignore
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": this.apiKey, 
        "X-Goog-FieldMask":
          "id,displayName,photos,formattedAddress,rating,internationalPhoneNumber,currentOpeningHours",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  }
}
