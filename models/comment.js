module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("Comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            // len: [1, 140]
        }
    });

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