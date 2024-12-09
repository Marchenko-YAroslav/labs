const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];

difference = (arr1, arr2) => {
    return arr1.filter(i => !arr2.includes(i));

}

const result = difference(array1, array2);
const result2 = difference(array3, array4);

console.log(result);
console.log(result2);
