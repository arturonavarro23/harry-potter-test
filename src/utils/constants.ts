import type {House} from 'types'
import gryffindor from 'assets/houses/gryffindor.svg'
import slytherin from 'assets/houses/slytherin.svg'
import hafflepuff from 'assets/houses/hufflepuff.svg'
import raveclaw from 'assets/houses/ravenclaw.svg'
import gryffindorEmblem from 'assets/emblem/gryffindor.png'
import slytherinEmblem from 'assets/emblem/slytherin.png'
import hafflepuffEmblem from 'assets/emblem/hufflepuff.png'
import raveclawEmblem from 'assets/emblem/ravenclaw.png'

export const BASE_URL = 'https://hp-api.onrender.com/api'

export const houses: House[] = [
  {id: 1, name: 'gryffindor', image: gryffindor, emblem: gryffindorEmblem},
  {id: 2, name: 'slytherin', image: slytherin, emblem: slytherinEmblem},
  {id: 3, name: 'ravenclaw', image: raveclaw, emblem: raveclawEmblem},
  {id: 4, name: 'hufflepuff', image: hafflepuff, emblem: hafflepuffEmblem},
]

export const houseGradients: Record<string, string> = {
  Gryffindor: 'from-[#770C0B] to-[#30090B]',
  Slytherin: 'from-[#43742E] to-[#223E09]',
  Ravenclaw: 'from-[#1E6586] to-[#123B50]',
  Hufflepuff: 'from-[#AF8528] to-[#674B0D]',
}
