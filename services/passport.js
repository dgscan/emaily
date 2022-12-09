const passport = require('passport'); //passport
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');



//serialize user: user model instance mongoose model
//user model put some identification into cookie

passport.serializeUser( (user, done) => {
    done(null, user.id);
});


//deserialize user: return id into mongoose model instance
passport.deserializeUser ( (id,done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
    //findone : allow us to pass in some search
    //criteria that return the very first record
    //that matched that criteria
});


//enabling cookie

//passport.use generic use; there is a new strategy GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken,refreshToken, profile, done) => {
    /*return from google*/

    User.findOne({ googleId: profile.id }).then((existingUser)=>{
        if (existingUser){
            //login
            console.log("user exist: ",existingUser );
            done(null,existingUser)
        }else{
            //register
            //mongo register user is an async process
            console.log("New user created on Mongo: ",existingUser );
            new User ({ googleId: profile.id}).save()
            .then(user => done(null, user));
        }
        
    }); //check if the user exists    

})); //new GoogleStrategy creates an instance
