var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    // Define User model
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 100],
            }
        
        },
        // photo: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        organization: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        }
    });

    User.associate = (models) => {
        // A user has many posts and comments
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };
    //synchronously tests a string against a hash.
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    //synchrnously generates a hash for the given string.
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};