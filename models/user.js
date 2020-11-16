module.exports = function (sequelize, DataTypes) {
    // Define User model
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // photo: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        organization: {
            type: DataTypes.STRING,
            allowNull: false
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // User.associate = function (models) {
    //     // A user has many posts and comments
    //     models.User.hasMany(models.Post);
    //     models.User.hasMany(models.Comment)
    // };

    return User;
};