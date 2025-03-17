import { useQuery } from "@tanstack/react-query";
import { getParlaments } from "./parlaments.api";

const keys = {
  root: () => ["parlaments"],
  getParlaments: () => [...keys.root()] as const,
};

export function useGetParlaments() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getParlaments,
  });
}
