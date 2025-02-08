import { useQuery } from "@tanstack/react-query"
import { getSpeciality, getSpecialityDetails } from "./speciality.api"

const keys = {
  root: () => ['speciality'],
  getSpeciality: (slug: string) => [...keys.root(), slug] as const,
}

export function useGetSpeciality() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getSpeciality,
  })
}

export function useGetSpecialityDetail(slug: string) {
  return useQuery({
    queryKey: keys.getSpeciality(slug),
    queryFn: () => getSpecialityDetails(slug)
  })
}