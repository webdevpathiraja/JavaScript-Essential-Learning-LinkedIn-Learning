// Remove the last item from the array.
// Sort the remaining array items alphabetically.
// Move the last item in the array to the first position.
// Find the "USB Drive" item in the array and move it to the last position.
// Find the "laptop" item in the array and remove it.

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr= [...deskArray];

    // Your code goes here
    newDeskArr.pop();
    newDeskArr.sort();

    newDeskArr.unshift(newDeskArr.pop());

    const usbIndex = newDeskArr.indexOf("USB drive");
    newDeskArr.push(newDeskArr.splice(usbIndex, 1));

    const lapIndex = newDeskArr.indexOf("laptop");
    newDeskArr.splice(lapIndex, 1);
    


        
    // Your code ends here

    return newDeskArr;
};