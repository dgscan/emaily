const passport = require ('passport');

module.exports = app =>{

    //Route handler associate with giving route
    app.get('/auth/google', passport.authenticate('google', 
            {
                scope: ['profile','email'] //specifies to google what access we want to have inside of user's profile eg. contact list, email, drive docs, etc.
            })
    );

    //get users info basically
    app.get('/auth/google/callback',passport.authenticate('google'));

    app.get('/api/logout',(req,res) =>{

        console.log(req);
        req.logout();
        console.log("after log req",req);
        res.send(req.user);
        
    });


    app.get('/api/current_user',(req,res) => {

        res.send(req.user);

    });

    /** 
    app.get('/', (req, res) => {

        res.send({hi: 'buddy'});

    });

    app.get('*', (req, res)=>{

        res.send({ no: 'home' });

    });
    */

};