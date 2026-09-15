import type { CloudRegion } from "@/types";

const REGIONS_ENDPOINT =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,region,cca2,flag";

interface RestCountry {
  name: { common: string };
  region: string;
  cca2: string;
  flag: string;
}

/**
 * Real public data (restcountries.com) reshaped into "active cloud regions".
 * This is presentational only — it does not represent actual cloud provider
 * region availability.
 */
export async function fetchCloudRegions(): Promise<CloudRegion[]> {
  const response = await fetch(REGIONS_ENDPOINT);

  if (!response.ok) {
    throw new Error("Failed to load environment data.");
  }

  const countries: RestCountry[] = await response.json();

  return countries
    .filter((country) => country.name?.common && country.region)
    .map((country) => ({
      code: country.cca2,
      name: country.name.common,
      continent: country.region,
      flag: country.flag,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 12);
}
