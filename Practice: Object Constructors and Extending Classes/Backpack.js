// @ts-nocheck



class Backpack {
  constructor(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen
  ) {
    // Define properties
    this.name = name;
    this.volume = volume;
    this.color= color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthL,
    };
    this.lidOpen = lidOpen;

  } 

  // Methods
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }

  
}

export default Backpack;
