const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/todomodle');
const TodoController = require('./controller/todocontroller')


const PORT = process.env.PORT || 8000;
const app = express();
var mongodbURI = 'mongodb://A_B:123@ds129043.mlab.com:29043/pro1';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI, {
    useMongoClient: true
});


app.route('/')
    .get(function(req, res) {
        return res.json({
            message: 'Welcome to todomvc'

        })
    })

    .post(function(req, res){
        return TodoController.createTodo(req, res);
    });


app.listen(PORT);

console.log('Server started successfully at '+PORT);
