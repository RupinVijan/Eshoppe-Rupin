const app = require('./app')

const connectDatabase = require('./config/dataConfig')

const dotenv= require('dotenv')

dotenv.config({path:'config/config.env'})

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
