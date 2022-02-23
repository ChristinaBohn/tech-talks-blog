const User = require('./User');


// User has many Posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

// Post belongs to User (Post.user_id foreign key)
Post.belongsTo(User, {
    foreignKey: 'user_id'
  });

// User has many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

// Comment belongs to User (Comment.user_id)
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

// Comment belongs to Post (Comment.post_id)
Comment.belongsTo(Post, {
    foreignKey: 'user_id'
  });

module.exports = { User, Comment, Post };