import CharacterCard from 'components/Character'
import Header from 'components/Header'
import Loader from 'components/Loader'
import Error from 'components/Error'
import {useGetCharactersPerHouse} from 'queries/useGetCharactersPerHouse'
import {useParams} from 'react-router-dom'
import {HouseNames} from 'types'
const House = () => {
  const {houseId} = useParams<{houseId: HouseNames}>()
  const {
    data: character,
    isError,
    isLoading,
  } = useGetCharactersPerHouse(houseId)

  return (
    <main className="bg-houses bg-center bg-no-repeat bg-cover h-screen w-screen">
      <div className="container m-auto h-full  flex flex-col">
        <Header />
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          <div className="mt-4 container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-auto">
            {character?.map((character) => (
              <CharacterCard key={character.id} info={character} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
export default House
