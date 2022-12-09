const express = require ('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./routes/authRoutes');
require('./models/User');
require('./services/passport');


//const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);


//Inside of a single projects we might 
//have different express apps.
//Calling express like a function generates like a new app
const app = express();

//tell express that it needs to make use of cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days milisecs
        keys: [keys.cookieKey]//
    })
);

//tell passport it should make use of cookies to handle auth
app.use(passport.initialize());
app.use(passport.session());



//authRoutes(app);
require ('./routes/authRoutes')(app);



//HEROKU choses the port or 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);

//git init
//add .


/**
 * FIRST TIME DEPLOYEMENT
 * git add .
 * git commit -m "initial comit"
 * 
 * 
 * heroku create
 » Warning: heroku update available from 7.53.0 to 7.64.0.
Creating app... done, ⬢ desolate-taiga-80269
https://desolate-taiga-80269.herokuapp.com/ | https://git.heroku.com/desolate-taiga-80269.git
git remote add heroku https://git.heroku.com/desolate-taiga-80269.git
error: remote heroku already exists.
git push heroku master
 */


/**RE-DEPLOY FILE
 * git status // what is changed
 * git add .
 * git commit -m "changed greeting"
 * git push heroku master
 * 
*/