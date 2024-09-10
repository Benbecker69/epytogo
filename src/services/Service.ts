import { ServiceInterface } from "./ServiceInterface";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export class Service implements ServiceInterface {
  apiKey = process.env.VITE_API_KEY;
  apiKeyGeo = process.env.VITE_API_KEY_GEO;

  constructor(
    public baseUrl: string,
    public method: Method,
  ) {
    this.baseUrl = baseUrl;
    this.method = method;
  }

  async searchRestaurantsByLocationId({
    location_id,
  }: {
    location_id: string;
  }): Promise<unknown[]> {
    const options = {
      method: this.method,
      headers: {
        "X-RapidAPI-Key": this.apiKey,
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `${this.baseUrl}/restaurant/searchRestaurants?locationId=${location_id}`,
      options,
    );
    const result = await response.json();

    return result.data.data;
  }

  async searchRestaurantsByCity({
    city,
  }: {
    city: string;
  }): Promise<unknown[]> {
    const options = {
      method: this.method,
      headers: {
        "X-RapidAPI-Key": this.apiKey,
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `${this.baseUrl}/restaurant/searchLocation?query=${city}`,
      options,
    );
    const result = await response.json();

    return result.data.data;
  }

  async searchHotels({
    lat,
    long,
    page,
  }: {
    lat: string;
    long: string;
    page: number;
  }): Promise<unknown[]> {
    const options = {
      method: this.method,
      headers: {
        "X-RapidAPI-Key": this.apiKey,
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `${this.baseUrl}/hotels/searchHotelsByLocation?latitude=${lat}&longitude=${long}&pageNumber=${page}`,
      options,
    );
    const result = await response.json();

    return result.data.data;
  }

  async searchGeo({ address }: { address: string }): Promise<unknown[]> {
    const response = await fetch(
      `${this.baseUrl}?address=${address}&key=${this.apiKeyGeo}`,
    );
    const result = await response.json();

    return result.results;
  }
}
