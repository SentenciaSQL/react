const myArray: number[] = [1,2,3,4,5,6];

myArray.push(10);
myArray.push(11);

const myArray2 = [...myArray]; 

myArray2.push(12);

console.log({myArray, myArray2});


// for(let myNumber of myArray) {
//     console.log(myNumber);
// }