import { useQuery } from '@tanstack/react-query'
import { getTeacherData } from './teacher.api'

const keys = {
  root: () => ['teacher'],
}

export function useGetTeacher() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getTeacherData,
  })
}
