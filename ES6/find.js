let employee = [
    {
        ename : "Johny",
        age : 35,
        designation : "Software Developer",
        salary : 50000
    },
    {
        ename : "Sunny",
        age : 30,
        designation : "Web Developer",
        salary : 40000
    },
    {
        ename : "Danny",
        age : 27,
        designation : "Backend Developer",
        salary : 45000
    },
    {
        ename : "Eny",
        age : 32,
        designation : "Frotend Developer",
        salary : 45000
    }
]

let employeeDetails = employee.find((i,j)=>{
    return i.age > 30;
})

console.log(employeeDetails);