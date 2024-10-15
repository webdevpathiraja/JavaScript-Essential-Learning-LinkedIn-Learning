/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  
  nameChange: function(backpackName) {
    this.name = backpackName;
  },
  volumeChange: function(backpackVolume) {
    this.volume = backpackVolume;
  },
  newPocketNum: function(backpackPoeckets) {
    this.pocketNum = backpackPoeckets;
  },
  updateStrapLength: function(newLeftLength, newRightLength) {
    this.strapLength.left = newLeftLength;
    this.strapLength.right = newRightLength;
  },
};

console.log("Previous name:", backpack.name);
backpack.nameChange("This is my new backpack");
console.log("New name:", backpack.name);

console.log("Previous volume:", backpack.volume)
backpack.volumeChange("2L");
console.log("New volume:", backpack.volume)

console.log("Prevoius number of pockets:", backpack.pocketNum);
backpack.newPocketNum(40);
console.log("Current number of pockets:", backpack.pocketNum);

console.log("Previous L and R Straps Length:" , backpack.strapLength.left, backpack.strapLength.right);
backpack.updateStrapLength(12, 20) // left - 12, left - 20
console.log("Current Left strap Length:", backpack.strapLength.left); // left - 12






