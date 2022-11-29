const mongose=require("mongoose");
const  connectTDB=async()=>{
    try
    {
        const conn=await mongose.connect("mongodb+srv://abdullah:hero124421@cluster0.pbqmim3.mongodb.net/?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`mangoDB connected:${conn.connection.host}`.cyan.underline);
    }catch(error)
    {
        console.error(`error:${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
module.exports=connectTDB;