import {getPicProfile} from "./picProfile";
var uniqid = require('uniqid');

const JIMBO = "JIMBO";
const betterLife = "BETTERLIFE";
const WarFrame = "WARFRAME"; // TODO check name 
const pico8 = "pico8";


const gamesProfiles = {
  JIMBO: [
    {
      id: uniqid("p"),
      pic: getPicProfile(JIMBO, 1)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(JIMBO, 2)
    },
    {
      id: uniqid("p"),

      pic: getPicProfile(JIMBO, 3)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(JIMBO, 4)
    },
  ],
  betterLife: [
    {
      id: uniqid("p"),
      pic: getPicProfile(betterLife, 1)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(betterLife, 2)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(betterLife, 4)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(betterLife, 3)
    },

  ],
  WarFrame: [
    {
      id: uniqid("p"),
      pic: getPicProfile(WarFrame, 1)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(WarFrame, 2)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(WarFrame, 3)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(WarFrame, 4)
    }
  ],
  pico8: [
    {
      id: uniqid("p"),
      pic: getPicProfile(pico8, 1)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(pico8, 2)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(pico8, 3)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(pico8, 4)
    },
    {
      id: uniqid("p"),
      pic: getPicProfile(pico8, 5)
    },
  ]

}

export const getGameProfiles = (nameGame) => {
  const currentProfile = gamesProfiles[nameGame];

  return currentProfile !== undefined ? currentProfile : undefined; 
}