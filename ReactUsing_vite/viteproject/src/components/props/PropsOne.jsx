import DisplayEmployee from "./DisplayEmployee"

const employees = [
    {
        ename : 'Johny',
        eage : 25,
        edesignation : 'Web Developer',
        esalary : 25000
    },
    {
        ename : 'Sunny',
        eage : 26,
        edesignation : 'Andriod Developer',
        esalary : 35000
    },
    {
        ename : 'Lucky',
        eage : 28,
        edesignation : 'Software Developer',
        esalary : 65000
    },
    {
        ename : 'Smith',
        eage : 25,
        edesignation : 'Web Designer',
        esalary : 40000
    }
]

const PropsOne = () =>{
    return(
        <div>
            <h1>Employee Records</h1>
            <DisplayEmployee employeeData = {employees}/>
        </div>
    )
}

export default PropsOne;