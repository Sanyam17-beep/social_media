const mongoose=require('mongoose');
module.exports= async()=>{
    const mongoUri ="mongodb+srv://sanyam17:noU8JFk12Wu4fjRn@cluster0.9nyaeoo.mongodb.net/?retryWrites=true&w=majority";

try{
    const connect=await mongoose.connect(
        mongoUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log(`MongoDB connected: ${connect.connection.host}`);
}
catch(e){
    console.log(e);
    process.exit(1);
}
}