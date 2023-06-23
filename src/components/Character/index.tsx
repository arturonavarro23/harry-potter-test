import {FC, useState} from 'react'
import {Character} from 'types'
import clsx from 'clsx'
import wizardPlaceholder from 'assets/wizard-placeholder.jpeg'

import {StyledCharacterCard} from './styled'
import {houseGradients} from 'utils/constants'
const CharacterCard: FC<{info: Character}> = ({info}) => {
  const [isRotated, setIsRotated] = useState(false)

  const handleFlip = () => {
    setIsRotated((prevState) => !prevState)
  }

  return (
    <StyledCharacterCard className="flip-card rounded p-2" key={info.id}>
      <div
        className={clsx('flip-card-inner', isRotated && 'flip-card-rotation')}
      >
        <div
          className={`flip-card-front bg-gradient-to-br flex flex-col ${
            houseGradients[info.house]
          } items-center gap-3 justify-center rounded-2xl`}
        >
          <img
            className="border-4 border-[#F3D692]"
            onClick={handleFlip}
            src={info.image ? info.image : wizardPlaceholder}
            alt="character image"
          />
          <h2 className="text-md text-[#F3D692] font-PPEikoThin tracking-wide">
            {info.name}
          </h2>
        </div>
        <div
          onClick={handleFlip}
          className={`flip-card-back flex flex-col gap-4 rounded-2xl bg-gradient-to-br ${
            houseGradients[info.house]
          } p-5`}
        >
          <h2 className="text-md text-[#F3D692] font-PPEikoMedium tracking-wide">
            {info.name}
          </h2>
          <section className="flex flex-col gap-2 text-[#F3D692] tracking-wide">
            <h3 className="font-NeueMontrealRegular">
              {Array.isArray(info.alternate_names)
                ? info.alternate_names[0]
                : 'N/A'}
            </h3>
            <ul className="text-left text-xs flex flex-col gap-2">
              <li>
                Species: <span>{info.species}</span>
              </li>
              <li>
                Gender: <span>{info.gender}</span>
              </li>
              <li>
                Date of birth: <span>{info.dateOfBirth}</span>
              </li>

              <li>
                Patronus: <span>{info.patronus ?? 'N/A'}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </StyledCharacterCard>
  )
}

export default CharacterCard
