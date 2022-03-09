# VIEWS

GET - "/" - Home ** (homeRoutes.js)

------

GET - "/login" - Login Form ** (homeRoutes.js)

POST - "/api/users/login" - Authenticate existing user

------

GET - "/signup" - Registration form ** (homeRoutes.js)

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

GET - "/post/:postId" - View a single post ** (homeRoutes.js)

POST - "/api/comments" - Create a comment for a post
