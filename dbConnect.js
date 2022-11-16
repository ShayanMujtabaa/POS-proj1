const mongoose = require('mongoose');

const dbConnect = ()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/proj-1-POS').then((con)=>{
            console.log(`Database connected`)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect
