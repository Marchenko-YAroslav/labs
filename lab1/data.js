const data =[1, true, -32, 'program', 141, false, 'grimm']

const l = data.length
const h = { number: 0, string: 0, boolean: 0 }

function count(){
    for(let i= 0;i < l;i++){
        if(typeof data[i] == 'boolean'){
            h.boolean = h.boolean + 1
        }else if(typeof data[i] == 'number'){
            h.number = h.number + 1
        }else if (typeof data[i] == 'string'){
            h.string = h.string + 1
        }
    }
    console.log(h)


}
count()

