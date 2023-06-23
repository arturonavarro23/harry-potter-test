import axios from 'axios'
import {useQuery, useQueryClient} from '@tanstack/react-query'
import {Character, HouseNames} from 'types'
import {BASE_URL} from 'utils/constants'

const getCharactersPerHouse = async (house: HouseNames) => {
  const {data} = await axios.get<Character[]>(
    `${BASE_URL}/characters/house/${house}`,
  )
  if (data.length === 0) {
    return Promise.reject('No data found')
  }
  return data
}

export const useGetCharactersPerHouse = (house: HouseNames | undefined) => {
  const client = useQueryClient()
  return useQuery({
    queryKey: [`characters-${house}`],
    queryFn: async () => house && getCharactersPerHouse(house),
    initialData: () => {
      return client.getQueryData([`characters-${house}`], {exact: true})
    },
    enabled: Boolean(house),
    // retry: 0,
    // networkMode: 'offlineFirst',
    // staleTime: 1000 * 60 * 60 * 24,
    // cacheTime: 1000 * 60 * 60 * 24 * 7,
  })
}
