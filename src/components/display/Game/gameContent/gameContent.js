import {gamePicDisplay} from "./gamePicDisplay";
import {gameDiscription} from "./gameDiscription";
var uniqid = require('uniqid');

const gameEngine = {
  unreal: "Unreal Engine",
  unity: "Unity",
  pico: "pico 8"
}

export const getGameContent = () => {
  return gameContent;
}

const gameContent = [
  {
    id: uniqid("g"),
    image: gamePicDisplay.WarFrame,
    header: "No given name",  //TODO Give proper name
    nameGame: "WarFrame",
    discription: "this is gamse made to fill your",
    gameEngine: gameEngine.unreal,
    script: "C++ & blueprint"
    
  },
  {
    id: uniqid("g"),
    image: gamePicDisplay.jimbo,
    header: "JIMBO LostSignal",
    nameGame: "JIMBO",
    discription: gameDiscription.jimboDiscription,
    gameEngine: gameEngine.unity,
    script: "C#"
  },
  {
    id: uniqid("g"),
    image: gamePicDisplay.betterLife,
    header: "A Better Life",
    nameGame: "betterLife",
    discription: gameDiscription.betterLifeDiscription,
    gameEngine: gameEngine.unity,
    script: "C#"
  },
  {
    id: uniqid("g"),
    image: gamePicDisplay.pico8,
    header: "PICO 8",
    nameGame: "pico8",
    discription: gameDiscription.pico8Discription,
    gameEngine: gameEngine.pico,
    script: "pico8"
  },

  
 
]