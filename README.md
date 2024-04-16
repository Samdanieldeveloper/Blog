# Blog

# Description of my project

This is the based on blog website that has have features of creating a new blog post on yourselves or read the post published by author

This blog shows you subjects in which the content was involved in

then date input is given this will write the date of current date which at the time of submitting it will be recorded

then we have content for reading

# Working

this project has one main page and one router for api which will process and store the data after we have 4 components of HTML this is detailed explained below

 1. server.js 
    Server .js is situtated in the main folder of blog website, it is the primary file that we connected a mongoose which we store the data to mongoDB, 
    then we have express server and body-parser

    Apart from all we have get method here it is some of the get method in this project

    firstly we need to have a home page for that we had made get method with a url '/' which means home of the page or first page, then we have 

    then we have set method with a string parameter 'view engine','ejs' it means that we need to access view for ejs(embedded javascript) that we are using instead of HTML. This ejs will accept the HTML as well as Javascript which we can embed with html

    for example in router get method we get the data and we render the file by giving file name on res.render function along with file name you'll give the object that says {example : variable} before that variable will be storing the data that we give as follows
    let variable = {title,age,date,time} = req.body
    res.render('url',{example: variable})
    then we call this in ejs file as like follows

    <div> <%=example.title%> </div>

2. article.js
    This file has the the router and has the remaining get and post method using this router at one we post the data by using post method

    then get method for getting the one particular data for reading this will render you to show file that designed in ejs here we write url as '/:id' this is the params of the url our unique id will be the value for this

    then get method for creating new blog this render a file new.ejs 

    

