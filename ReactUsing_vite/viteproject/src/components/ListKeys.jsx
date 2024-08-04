const productList = ['Watch','Mobile','Laptop','Pen Drive','Headphone'];
const ListKeys = () =>{
    return(
    <div>
        <h1>Product List</h1>
        <ul>
        {
            productList.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
        </ul>
    </div>
    )
}

export default ListKeys;