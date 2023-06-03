import { Router } from "express";
import bodyParser from "body-parser";
import ToDo from "../models/todo.js";

const router = Router()
router.use(bodyParser.urlencoded({extended:true}))
//Get
router.get('/delete',async(req,res)=>{
    const id =req.params._id;
    
    ToDo.deleteOne(id)
    .then(()=>{
        console.log('DElETED');
        res.redirect('/')
    })
    .catch((err)=>{
        console.log('err');
    })
})

router.get('/',async(req,res)=>{
    const todos = await ToDo.find().lean()
    res.render('index',{
        Todos:todos
    })
})  

router.get('/edit_:_id', async (req, res)=>{
    const product=await ToDo.findById(req.params._id).lean()
    res.render('edit',{
        product:product.todo,
        idproduct:product._id
    })
    console.log('Edited');
 });
//Post
router.post('/addtodo',bodyParser.urlencoded({extended:true}),async(req,res)=>{
    const todoData={
        todo:req.body.todo
    }
    const Todo = await ToDo.create(todoData)
    
    res.redirect('/')
    console.log('Add Todo');
})

router.post('/edit/:_id',async (req,res)=>{
    const id=req.params._id;
    const updated = await ToDo.findByIdAndUpdate(id,req.body,{new:true})
    console.log(updated);
    res.redirect('/');
    })

export default router