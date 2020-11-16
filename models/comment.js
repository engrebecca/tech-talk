module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            // len: [1, 140]
        }
    });

    // Comment.associate = (models) => {

    //     Comment.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Comment.belongsTo(models.post, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Comment;
};