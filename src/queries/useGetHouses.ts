import {useQuery, useQueryClient} from '@tanstack/react-query'
import {House} from 'types'
import {houses} from 'utils/constants'

const getStaff = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return houses
}

export const useGetHouses = () => {
  const client = useQueryClient()
  return useQuery<House[], Error>({
    queryKey: ['houses'],
    initialData: () => {
      return client.getQueryData(['houses'])
    },
    queryFn: async () => getStaff(),
    keepPreviousData: true,
    retry: 0,
    networkMode: 'offlineFirst',
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60 * 24 * 7,
  })
}
