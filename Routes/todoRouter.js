const express =require('express');
const router =express.Router();
const Todo = require('../Models/todo');


router.post('/create',async (req,res)=>{
    try{
   const {title,description} = req.body;
   const newTodo = new Todo({
    title,
    description
   });
   await newTodo.save();
   res.status(201).json({
     message: "todo created successfully",
   });
    }catch(err){
       res.status(500).json({
        message: "todo creacted unsuccessfully"+err.message
       });
    }
});
router.get('/alltodos',async (req,res)=>{
try{
    const todos= await  Todo.find();
    res.status(200).json({
        todos,
        message:"todo fetched successfully "
    })
}catch(err){
    res.status(500).json({
        message: "todo fetched unsuccessfully "+err.message
    })
}
   
})
router.get('/alltodos/:id',async (req,res)=>{
    try{
        const todo= await  Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({
                message:"todo not found"
            });
        }
            res.status(200).json({
                todo,
                message:"todo fetched successfully "
            })
     
       
    }catch(err){
        res.status(500).json({
            message: "todo fetched unsuccessfully "+err
        })
    }
       
    })


    router.delete('/alltodos/:id',async (req,res)=>{
        try{
            const todo= await  Todo.findByIdAndDelete(req.params.id);
            if(!todo){
                return res.status(404).json({
                    message:"todo not found"
                });
            }
                res.status(200).json({
                    todo,
                    message:"todo deleted successfully "
                })
        
           
        }catch(err){
            res.status(500).json({
                message: "todo deleted unsuccessfully "+err
            })
        }
           
    
    });

    router.put('/alltodos/:id',async (req,res)=>{
        try{
            const todo= await  Todo.findByIdAndUpdate(req.params.id,req.body,{
                new:true
            });
            if(!todo){
                return res.status(404).json({
                    message:"todo not found"
                });
            }
                res.status(200).json({
                    todo,
                    message:"todo updated successfully "
                })
        
           
        }catch(err){
            res.status(500).json({
                message: "todo updated unsuccessfully "+err
            })
        }
    })

module.exports= router;