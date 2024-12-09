const array = [1, 2, 3, 4, 5, 6, 7];
const arrayCity = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

removeElements = (arr, ...num)=>{
    for(let i=0;i < num.length;i++){
        const index = arr.indexOf(num[i])
        if(index != -1){
            arr.splice(index, 1)
        }

    }
}


removeElements(array, 5, 1 ,3 ,6);
removeElements(arrayCity, 'Lima', 'Berlin', 'Kiev');

console.log(array);
console.log(arrayCity);
