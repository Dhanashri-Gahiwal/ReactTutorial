const ArrowFunction = () =>{
    return(
        <div>
            <h3>Arrow Function</h3>
        </div>
    )
}

function NestedComponent(){
    return(
        <div>
            <ArrowFunction />
            <h3>Nested Component</h3>
        </div>
    )
}
export default NestedComponent;