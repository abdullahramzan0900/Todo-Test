function Search({Title})
{   console.log("title",Title) 
    return(
        <>
        {
            Title && Title?.length>0 && Title?.map((item)=>{
                return(
                    <div key={item.id}>                    
                    <h1>{item.title}</h1>                   
                    </div>
             )
            })        
        }
        </>
    )
}
export default Search