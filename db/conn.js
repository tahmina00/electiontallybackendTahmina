const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// database connection with mongoose
mongoose
.connect('mongodb://localhost/registrationlogin',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('connection successful'))
.catch(err => console.log(`no connection`))