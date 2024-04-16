import express from "express"
import __dirname from "../server.js"
import model from "../models/model.js"

const router = express.Router()

router.get('/new' , (req , res)=>{

   res.render(__dirname + "/Components/articles/new.ejs",{article: new model()})

})

router.get('/:id',async(req,res)=>{
   const id = await model.findById(req.params.id)
   res.render(__dirname + '/Components/articles/show',{article:id})
})

router.post('/',async(req,res)=>{
   const {subject,title,author,description,createdAt,content} = req.body;
   let article = new model({subject,title,author,description,createdAt,content})

   try{

      article = await article.save()
      console.log("Successfully recorded ",article);
      res.redirect(`/articles/${article.id}`)
   }

   catch(e){
      res.render('/articles/new',{article:article})
      console.log("Not recorded " , e, article);

   }
})

export default router