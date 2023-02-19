const express=require('express')
const app=express()
const {connection}=require('./db')
const {userRoute}=require('./routes/user')
const {crudRouter}=require('./routes/crud')
const {auth}=require('./middleware/authan')
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.use('/user',userRoute)
// app.use(auth)
app.use('/notes',crudRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
   
})