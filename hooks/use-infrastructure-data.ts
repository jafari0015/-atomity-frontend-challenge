import { useQuery } from "@tanstack/react-query";
import { fetchCloudRegions } from "@/lib/api";

export function useInfrastructureData() {
  return useQuery({
    queryKey: ["cloud-regions"],
    queryFn: fetchCloudRegions,
    staleTime: 5 * 60 * 1000,
  });
}
