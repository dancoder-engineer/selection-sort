function selectionSort(arr) {
  // type your code here
  let sorted = []
  while (arr.length != 0) {
    let arrNums = [arr[0], 0]
    for (let f = 0; f < arr.length; f++) {
      if (arr[f] < arrNums[0]) { 
        arrNums[0] = arr[f]
        arrNums[1] = f
      }
    }
    sorted.push(arr.splice(arrNums[1], 1)[0])

  }
  return sorted
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
