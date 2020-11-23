module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("Post", {
        body: {
            type: DataTypes.STRING,
            allowNull: false
            // validate: {
            //     len: [1]
            // }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Post.associate = (models) => {
        // A post belongs to a user
        // models.Post.belongsTo(models.User, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
        models.Post.belongsTo(models.User);
        // A post has many comments
        models.Post.hasMany(models.Comment);
        // A post has many tags
        models.Post.hasMany(models.PostTag);

    }

    return Post;
}