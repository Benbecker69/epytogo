export interface ServiceInterface {
  // * Recherche des restaurants en fonction d'un identifiant de lieu (location_id).
  searchRestaurantsByLocationId({
    location_id,
  }: {
    location_id: string;
  }): Promise<unknown[]>;

  //  * Recherche des restaurants dans une ville donnée.
  searchRestaurantsByCity({ city }: { city: string }): Promise<unknown[]>;

  //  * Recherche des hôtels en fonction de la latitude et de la longitude, avec pagination.
  searchHotels({
    lat,
    long,
  }: {
    lat: string;
    long: string;
    page: number;
  }): Promise<unknown[]>;
}
