import SingleEmployee from "./SingleEmployee";

const DisplayEmployee = ({employeeData}) =>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employeeData.map((item,index)=>{
                                return( 
                                    // <tr key={index}>
                                    // <td>{item.ename}</td>
                                    // <td>{item.eage}</td>
                                    // <td>{item.edesignation}</td>
                                    // <td>{item.esalary}</td>
                                    // </tr>
                                    <SingleEmployee singleItem = {item} index = {index}/>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayEmployee;