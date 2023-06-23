import {Link} from 'react-router-dom'

import hat from 'assets/hat.svg'
import goldenSnitch from 'assets/goldenSnitch.svg'

const Landing = () => {
  return (
    <section className="grow">
      <div className="h-full grid grid-cols-2 items-center justify-center gap-10">
        <div className="flex justify-center">
          <img src={hat} alt="hat" />
        </div>
        <div className="flex flex-col gap-10  justify-left">
          <img
            className="w-[96px] h-[96px]"
            src={goldenSnitch}
            alt="golden snitch image"
          />
          <h1 className="text-6xl text-[#F3D692] font-PPEikoThin tracking-wide">
            <p>Welcome</p>
            <p> to hogwarts</p>
          </h1>
          <Link
            to={'/houses'}
            className="w-[205px] text-center text-[#F3D692] p-3 rounded-full border border-[#F3D692] font-NeueMontrealRegular tracking-widest"
          >
            Discover houses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
