// simple parameter
function num(n){
    console.log(n)
}
num(1);  //it returns 1
num(1,2);  //it returns only 1 bcz in this function only one parameter is pass

// rest parameter : you can pass multiple parameter values at calling time
function val(...v){
    console.log(v);
}
val(1);
val(1,2);
val(1,2,3);