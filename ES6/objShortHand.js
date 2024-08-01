let pname = 'John';
let age = 30;
let country = 'India';
let state = 'Maharashtra';

let person = {
    pname : pname,
    age : age,
    country : country,
    state : state
}

console.log(person)


// if keys and values are same then use short hand property
let p = {
    pname,
    age,
    country,
    state
}

console.log(p);