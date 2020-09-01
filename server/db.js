const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/url-shortener', (err)=> {
    if (!err) {
        console.log('Sucessfully connected to db')
    } else {
        console.log(err);
    }
});


module.exports = mongoose;
