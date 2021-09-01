const express=require('express')
require("dotenv").config()

const app =express()
const fileUpload=require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true
})) 

app.listen(process.env.PORT,(err)=>{
err?console.log(err):console.log(`server is running on port ${process.env.PORT}`)
})

const connectdb=require('./connectDb')
connectdb()

app.use(express.json())
app.use("/api/user",require('./routes/User'))
app.use('/api/rdv',require('./routes/rdv'))
app.use('/api/rec',require('./routes/reclamation'))
app.use('/',require('./routes/Upload'))







