unique = (arr) => {
    return arr.filter((i, pos)=>{
        return arr.indexOf(i) == pos;
    })
}
const result = unique([2, 1, 1, 3, 2]);
const result2 = unique(['top', 'bottom', 'top', 'left']);

console.log(result2);
console.log(result);
