import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import mongoose from 'mongoose';

const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine',ejs);
app.use(express.static('public'));
// mongoose.connect('mongodb+srv://ammar:ammar@cluster0.vuzjvhx.mongodb.net/ecomDB');


app.get('/',(req,res)=>{
    res.render('home.ejs');
})
app.listen('3000',()=>{
    console.log('Hello');
})