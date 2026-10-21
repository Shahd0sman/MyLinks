require('dotenv').config()
const app=require('./app')
const data=require('./db')
const express=require('express')
const routes=require('./routes')
app.use(express.json())
app.use('/api',routes)
async function start(){
    try {
        await data.initialize()
        const port=process.env.PORT||5000
        app.listen(port,()=>{
            console.log(`serverlink https://localhost:${port}`)
        })
    } catch (error) {
        console.log(`connection faild:${error}`)
    }
}
start()
