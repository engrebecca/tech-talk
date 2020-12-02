module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Comments belong to a user and a post
    Comment.associate = (models) => {

        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};