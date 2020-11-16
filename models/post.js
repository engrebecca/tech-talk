module.exports = (sequelize, DataTypes) => {

    var Post = sequelize.define("Post", {
        body: {
            type: DataTypes.STRING,
            allowNull: false
            // validate: {
            //     len: [1]
            // }
        }
    });

    Post.associate = (models) => {
        // A post belongs to a user
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        // A post has many comments
        Post.hasMany(models.Comment, {
            onDelete: "cascade"
        });
        // A post has many tags
        Post.hasMany(models.PostTag);

    }

    return Post;
}