import {Schema, model} from "mongoose";

const TodoSchema = new Schema({
    todo:{type:String,required:true}
})

const ToDo =model('ToDo',TodoSchema);
export default ToDo