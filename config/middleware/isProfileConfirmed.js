module.exports = function (req, res, next) {
    if (req.user.first_name === null) {

        return res.redirect("/createprofile");

    }
    return next();
};