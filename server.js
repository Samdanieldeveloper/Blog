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

mongoose.connect("mongodb+srv://samdanielselvirr:India_2023@cluster0.4iaig5o.mongodb.net/BlogWebsite").then(()=>console.log("Connected successfully"))
app.set('view engine','ejs')
app.get('/',async(req,res)=>{
    const articles = await model.find().sort({createdAt:'desc'})
    res.render(__dirname+"/Components/articles/index.ejs",{articles:articles})
})
app.use("/articles",router)
app.listen(port,()=>console.log(`Listening to port in ${port}`))

export default __dirname


