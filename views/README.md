# VIEWS

GET - "/" - Home

------

GET - "/login" - Login Form

POST - "/api/users/login" - Authenticate existing user

------

GET - "/signup" - Registration form

POST - "/api/users" - Create user

------

GET - "/dashboard" - User Dashboard

------

GET - "/dashboard/new" - Create Post View

POST - "/api/posts" - Create Post API

------

GET - "/dashboard/edit/:postId" - Edit Post View

PUT - "/api/posts/:postId" - Edit Post API

DELETE - "/api/posts/:postId" - Delete Post API

------

GET - "/post/:postId" - View a single post

POST - "/api/comments" - Create a comment for a post
