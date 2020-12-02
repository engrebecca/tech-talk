module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("Post", {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Post.associate = (models) => {
        models.Post.belongsTo(models.User);
        // A post has many comments
        models.Post.hasMany(models.Comment);
        // A post has many tags
        models.Post.hasMany(models.PostTag);

    }

    return Post;
}