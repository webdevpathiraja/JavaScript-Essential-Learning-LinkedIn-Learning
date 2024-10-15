// @ts-nocheck

import Backpack from "./Backpack.js";

class HikingBackpack extends Backpack{
    constructor (
        name, 
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        hydrationCapacity
    ) {
        // initialize the parent class property
        super(name, volume, color, pocketNum, strapLengthL, strapLengthR,lidOpen);

        // new property specific to HikingBackpack
        this.hydrationCapacity = hydrationCapacity;
    }

    checkHydration() {
        if (this.hydrationCapacity > 0) {
            console.logconsole.log(`You have ${this.hydrationCapacity} liters of water left`);
            
        } else {
            console.log("Time to refill your water!");
        }

    }

    // Extend or override methods from the parent class if necessary
    // For example, adding extra functionality when the lid is toggled

    toggleLid(lidStatus) {
        super.toggleLid(lidStatus); // call the parent method

        if (lidStatus) {
            console.log("Your hiking backpack lid is open. Remember to check to make sure the hydration pack is inserted.")
        } else {
            console.log("Your hiking backpack lid is closed. Remember to check to make sure the hydration pack is inserted")
        }
    }
}

export default HikingBackpack;