export type HouseNames = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff'

export type House = {
  name: HouseNames
  id: number
  image: string
  emblem: string
}

export type Character = {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: HouseNames
  dateOfBirth: string
  yearOfBirth: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: {
    wood: string
    core: string
    length: number
  }
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors: string[]
  alive: boolean
  image: string
}
