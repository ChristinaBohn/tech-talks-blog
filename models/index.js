const User = require('./User');


// User has many Posts

// Post belongs to User (Post.user_id foreign key)

// User has many Comments

// Comment belongs to User (Comment.user_id)

// Post has many Comments

// Comment belongs to Post (Comment.post_id)


module.exports = { User, Project };