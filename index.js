import express from "express"
import mongoose from "mongoose";
import {create,engine} from 'express-handlebars';
// Routes
import main from "./routes/rout1.js"

const app=express();
const hbs = create({defaultLayout:'main',extname:'hbs'});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views','./views');
app.use(main)

const PORT=4300
app.listen(PORT,()=>{
    console.log(`Port oyoqqa turdi${PORT}`);
})

mongoose.connect('mongodb://0.0.0.0:27017/todo')
.then(()=>{
    console.log('MongoDb Connected');
})
.catch((err)=>{
    console.error(err);
})