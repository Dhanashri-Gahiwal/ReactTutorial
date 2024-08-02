async function apicall(){
    try{
        const apires = await fetch("https://fakestoreapi.com/products/",()=>{
            method:get
        })
        const res = await apires.json();
        console.log(res)
    }catch(e){
        console.log(e);
    }
}
apicall()