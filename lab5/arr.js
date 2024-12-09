let array = () => {
    let arr = [];
        let sym = (i) => arr[i];
        let symList = (i)=> sym(i);

        symList.push = (v) => arr.push(v);
        symList.pop = () => arr.pop();

    return  symList;

}


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined






