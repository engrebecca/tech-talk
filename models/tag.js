module.exports = function (sequelize, DataTypes) {
    // Define Tag model
    var Tag = sequelize.define("Tag", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Tag.associate = function (models) {
        // A tag has many PostTags
        models.Tag.hasMany(models.PostTag);
    };

    return Tag;
};