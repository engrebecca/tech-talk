module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("post", {
        body: {
            type: DataTypes.STRING,
            allowNull: false
            // validate: {
            //     len: [1]
            // }
        }
    });  

    // Post.associate = (models) => {
    //     // A post belongs to a user
    //     Post.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     // A post has many comments
    //     Post.hasMany(models.comment, {
    //         onDelete: "cascade"
    //     });
    //     // A post has many tags
    //     Post.hasMany(models.tag, {
    //         onDelete: "cascade"
    //     });

    // }

    return Post;
}