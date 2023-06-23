import {Link} from 'react-router-dom'
import {houses} from 'utils/constants'
import harryPotterHeader from 'assets/harryPotter.svg'

const MenuOptions = () => {
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      {houses.map((house) => (
        <li key={house.id}>
          <Link
            to={`/houses/${house.name}`}
            className="text-[#F3D692] block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 font-NeueMontrealRegular tracking-widest"
            aria-current="page"
          >
            {house.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  return (
    <header>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={harryPotterHeader} alt="header image" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <MenuOptions />
        </div>
      </div>
    </header>
  )
}

export default Header
