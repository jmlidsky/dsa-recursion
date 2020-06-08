// Counting Sheep
const countSheep = function (numOfSheep) {

    // Base case
    if (numOfSheep === 0) {
        return console.log('All sheep jumped over the fence');
    }

    else {
        console.log(`${numOfSheep}: Another sheep jumps over the fence`);

        countSheep(numOfSheep - 1);
    }
}

countSheep(3)