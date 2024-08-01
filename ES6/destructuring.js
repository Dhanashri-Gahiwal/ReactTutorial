// destructure data in object

let obj = {
    pname : 'John',
    age : 30,
    country : 'India',
    state : 'Maharashtra'
}

// get obj details without destructuring
console.log(obj.pname,obj.age,obj.country,obj.state);

// get obj details with destructuring
let {pname, age, country, state} = obj;
console.log(pname, age, country, state);


// destructure data in array
const arr = [1,2,3];

// get array values without destructuring
console.log(arr[0],arr[1],arr[2]);

// get array values with destructuring
const [one, two] = arr;
console.log(one,two);

const [one1, two1, three1] = arr;
console.log(one1, two1, three1);

const [one2, two2, three2, four2] = arr;
console.log(one2, two2, three2, four2);

