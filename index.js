const express = require ('express');



//Inside of a single projects we might 
//have different express apps.
//Calling express like a function generates like a new app
const app = express();


/**
 * Route handler associate with givin route
 * 
 */

app.get('/', (req, res) => {

    res.send({hi: 'buddy'});

});

app.get('*', (req, res)=>{

    res.send({ 
        hi: 'home' 
    });

});

//HEROKU choses the port or 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);

//git init
//add .


/**
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
 * 
 * 
 * 
*/