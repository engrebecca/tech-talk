const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");
//authenticates user and password. LocalStrategy finds the credentials within the parameters.
passport.use(new LocalStrategy(
    {
        usernameField: "username"
    },
    (username, password, done) => {

        db.user.findOne({
            where: {
                username: username
            }
        }).then(dbUser => {

            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect username."
                });
            } else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }

            return done(null, dbUser);
        });
    }
));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;