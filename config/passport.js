const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;

const db = require("../models");
//authenticates user and password. LocalStrategy finds the credentials within the parameters.
console.log("passport file");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    (email, password, done) => {

        db.User.findOne({
            where: {
                email: email
            }
        }).then(dbUser => {
            console.log(dbUser);
            if (!dbUser?.validPassword(password)) {
                return done(null, false);
            }

            return done(null, dbUser);
        })
            .catch((err) => done(err));
    }
));

passport.use(new JWTStrategy(
    // If req.session exists, return the jwt. Reject if jwt is not returned.
    {
        jwtFromRequest: (req) => req.session?.jwt,
        secretOrKey: process.env.JWT_PUBLIC_KEY
    },
    (payload, done) => {
        console.log
        db.User.findOne({
            where: {
                id: payload.id
            }
        }).then(dbUser => {

            if (!dbUser)
                return done(null, false);
            // Add user to req object
            return done(null, dbUser);
        })
            .catch((err) => done(err));
    }
))

// passport.serializeUser((user, cb) => {
//     cb(null, user);
// });

// passport.deserializeUser((obj, cb) => {
//     cb(null, obj);
// });

module.exports = passport;