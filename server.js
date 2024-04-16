import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url"
import router from "./routes/article.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import model from "./models/model.js"


const app = express()
const port = 4005
app.use(bodyParser.urlencoded({extended:true}))
const file = fileURLToPath(import.meta.url)
const __dirname = dirname(file)

mongoose.connect("mongodb://127.0.0.1:27017/Blogs").then(()=>console.log("Connected successfully"))
app.set('view engine','ejs')
app.get('/',async(req,res)=>{
    const articles = await model.find().sort({createdAt:'desc'})
    res.render(__dirname+"/Components/articles/index.ejs",{articles:articles})
})
app.use("/articles",router)
app.listen(port,()=>console.log(`Listening to port in ${port}`))

export default __dirname


