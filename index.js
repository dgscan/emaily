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

    res.send({ 
        hi: 'there', 
    });

});

app.get('*', (req, res)=>{

    res.send({ 
        hi: 'home' 
    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

