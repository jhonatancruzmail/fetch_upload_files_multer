const express=require('express');
const multer=require('multer');

const app=express();
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        cb('',Date.now()+file.originalname)
    }
})

const upload=multer({
    storage:storage
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/files',upload.single('imagen'),(req,res)=>{
    res.send('works')
    })
    
    
    app.listen(3000,()=>{
    console.log('server working');
})
