let arr = [5,2,"str",true];

arr[0];
arr[1];
arr[2];

arr[2] = "text";
arr[4] = 1;
arr;

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
matrix;
matrix[2][2];

matrix[matrix.length-1];

matrix.shift();
matrix.push(8);
matrix;

matrix.pop();
matrix.unshift(8);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = arr1.concat(arr2);
arr3;

arr3.indexOf(4);

arr.join();

arr.splice(1,1,0);
arr.splice(-1,0,"Add element");

arr3.slice(3,5);
arr.includes("Text");

arr3.reverse();

"a, b, c, d".split();
"a, b, c, d".split(", ");

"abcd".split("");