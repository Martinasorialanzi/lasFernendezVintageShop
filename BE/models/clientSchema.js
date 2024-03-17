const mongoose= require (`mongoose`)
const {appConfig}=require(`../config`)
const Product = require(`../models/productSchema`);



const clientSchema= new mongoose.Schema({
    
    proveedor:{
        type: String,
        required: false
    },
    productos:{
        type:Array,
        require:false
    },
    dineroPagado:{
        type: Number,
        required: true
        
    },

    ultimoPago:{
        type: Number,
        required: true
        
    },
    fechaUltimoPago:{
        type: Date,

    },



   
})


const Client=mongoose.model(`Client`,clientSchema)
module.exports = Client;
