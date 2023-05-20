const app=require('./app')

const connectDb=require('./config/mongodb')
connectDb()

const PORT=5000

app.listen(PORT,()=>{
})

