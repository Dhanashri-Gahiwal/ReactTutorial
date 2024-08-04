const SingleEmployee = ({singleItem, index}) =>{
    return(
        <tr key={index}>
                <td>{singleItem.ename}</td>
                <td>{singleItem.eage}</td>
                <td>{singleItem.edesignation}</td>
                <td>{singleItem.esalary}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
        </tr>
    )
}

export default SingleEmployee;