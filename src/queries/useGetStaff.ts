import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import {Character} from 'types'
import {BASE_URL} from 'utils/constants'

const getStaff = async () => {
  const {data} = await axios.get<Character[]>(`${BASE_URL}/characters/staff`)
  return data
}

export const useGetStaff = () => {
  return useQuery({
    queryKey: ['staff'],
    queryFn: getStaff,
    retry: 0,
    keepPreviousData: true,
    networkMode: 'offlineFirst',
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24 * 7,
  })
}
