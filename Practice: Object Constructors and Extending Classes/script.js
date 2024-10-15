import Backpack from "./Backpack.js";
import HikingBackpack from './HikingBackpack.js';


const everydayBackpack = new Backpack (
    "my new backpack",
    "30L",
    "black",
    24,
    "30 inches", "30 inches",
    true,
);

const newHikingPack = new HikingBackpack (
    "hiking backpack",
    "50L",
    "grey",
    30,
    "36 inches", "36 inches",
    false,
)

console.log("The everydayPack object:", everydayBackpack);
console.log("The pocketNum value:", everydayBackpack.pocketNum);

console.log("The hiking backpack object:", newHikingPack);


