import Header from 'components/Header'
import Loader from 'components/Loader'
import {useGetHouses} from 'queries/useGetHouses'
import {Link} from 'react-router-dom'

const Houses = () => {
  const {isLoading, isError, data: houses} = useGetHouses()

  return (
    <main className="bg-houses bg-center bg-no-repeat bg-cover h-screen w-screen">
      <div className="container m-auto h-full  flex flex-col">
        <Header />
        <section className="mt-10 grow grid grid-rows-1 grid-flow-col">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div>{'Oopsie, something is not working...'}</div>
          ) : (
            houses.map(({id, name, image, emblem}) => (
              <div
                className={`flex justify-center items-center relative bg-center bg-no-repeat bg-cover text-center text-white text-2xl`}
                key={id}
              >
                <img className="absolute" src={image} alt="" />
                <section className="z-[1] flex flex-col gap-4 justify-center items-center">
                  <img src={emblem} className="w-[180px] h-[180px]" alt="" />
                  <Link
                    to={`/houses/${name}`}
                    className="w-[100px] text-center text-sm text-[#F3D692] p-2 rounded-full border border-[#F3D692] font-NeueMontrealRegular tracking-widest"
                  >
                    Enter
                  </Link>
                </section>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  )
}

export default Houses
