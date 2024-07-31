//Finding intersection of two arrays
const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];

const intersection = array1.filter(value => array2.includes(value));

console.log(intersection);

//array deduplication 
var arr1 = [1,1,1,2,3,4,4];
var y = arr1.length;
y = removeDuplicates(arr1, y);
for (var i = 0; i < y; i++) console.log(arr1[i] + " ");
function removeDuplicates(arr1, y) {
  if (y == 0 || y == 1) return y;
  var temp = new Array(y);
  var j = 0;
  for (var i = 0; i < y - 1; i++) if (arr1[i] != arr1[i + 1]) temp[j++] = arr1[i];
  temp[j++] = arr1[y - 1];
  for (var i = 0; i < j; i++) arr1[i] = temp[i];
  return j;
}

// comparing two arrays of equality
const array01 = [1, 2, 3];
const array02 = [1, 2, 3];
const equalValues = (array1. length === array2. length) && array1. every((value, index) => value === array2[index]);
if (equalValues) {
console. log("The arrays have equal values.");
} else {
console. log("The arrays do not have equal values.");
}

//creating the array of arrays
let arrayOfArrays = [
    [1, 2],   
    [4, 5],    
    [7, 8]     
];
console.log(arrayOfArrays);
arrayOfArrays.forEach(innerArray => {
    innerArray.forEach(element => {
        console.log(element);
    });
});

//Array Merging
const batters = ['Dhoni', 'virat'];
const bowlers = ['sam curran', 'Yuzi chahal'];

const cricket = [...batters, ...bowlers];

console.log(cricket);