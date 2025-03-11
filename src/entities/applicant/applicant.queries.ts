import { useQuery } from "@tanstack/react-query";
import { getApplicant } from "./applicant.api";

const keys = {
  root: () => ["applicant"],
  getApplicant: (slug: string) => [...keys.root(), slug] as const,
};

export function useGetApplicant() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getApplicant,
  });
}
