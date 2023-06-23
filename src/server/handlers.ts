import { rest } from 'msw';

import {BASE_URL} from 'utils/constants'


export const handlers = [
  rest.get(
    `${BASE_URL}/characters/house/:house`,
    (req, res, ctx) => {
      const {house} = req.params;

      if(house === 'slytherin') {
        return res(ctx.status(500),
        // And a response body, if necessary
        ctx.json({
          errorMessage: 'ups',
        }))
      }

      return res(ctx.json(
        [
          {"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/harry.jpg"},{"id":"4c7e6819-a91a-45b2-a454-f931e4a7cce3","name":"Hermione Granger","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":10.75},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/hermione.jpeg"},
        ]
      ));
    },
  ),
];
