const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

function ages(args){
    let ages = {};
    for(p in args){
        let age = args[p].died - args[p].born;
        ages[p] = age
    }
    return ages;
}

console.log(ages(persons));