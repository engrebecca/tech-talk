module.exports = function (sequelize, DataTypes) {
    // Define PostTag model, many to many relationship
    var PostTag = sequelize.define("PostTag", {
    });

    PostTag.associate = function (models) {
        models.PostTag.belongsTo(models.Post);
        models.PostTag.belongsTo(models.Tag);
    };

    return PostTag;
};
