//npm
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
//files
const config = require('./config');
const massive = require('massive');
// const pg = require('pg');
//app set up for express
const corsOptions = {
  origin: 'http://localhost:'+config.port
};
const app = express();

app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

// /////////////
// // DATABASE //
// /////////////

//sync to database
const connectionString = 'postgres://postgres:'+config.masPas+'@localhost/todo';
// console.log(connectionString);
const conn = massive.connectSync({ connectionString: connectionString});
//add your connection to express
app.set('db', conn);
//declare a db object for requests
const db = app.get('db');


// ///////////////
// // endpoints //
// //////////////
app.get('/api/todo',function(req,res,next){
  db.run(`select * from tasks`, (err, todo)=>{
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
            return res.status(200).send(todo);
        });
});
app.post('/api/todo',function(req,res,next){
  db.run(`select * from tasks`, (err, todo)=>{
          if(err){
            // console.log(err);
            return res.status(500).send(err);
          }
            return res.status(200).send(todo);
        });
});

//export app
module.export = app;

app.listen(config.port, function(){
  console.log('listening to port: ', config.port);
});
