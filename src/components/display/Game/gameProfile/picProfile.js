import {JIMBO} from "./picProfileJS/JimboPic";
import {BETTERLIFE} from "./picProfileJS/BetterLife";
import {WARFRAME} from "./picProfileJS/WarFrame";
import {pico8} from "./picProfileJS/Pico8Pic";

export const getPicProfile = (nameGame, idDiscription) => 
{
  const currentProfile = picProfile[nameGame];
  let pic;
  if (currentProfile !== undefined)
  {
    const indexProfile = currentProfile.findIndex(
      (pro) => pro.idDiscription === idDiscription
    );
    pic = indexProfile > -1 ? currentProfile[indexProfile].pic : "";
  }
  return pic;
}

const picProfile = {
  JIMBO : JIMBO,
  BETTERLIFE: BETTERLIFE,
  WARFRAME: WARFRAME,
  pico8: pico8
}