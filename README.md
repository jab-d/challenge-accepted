# challenge-accepted
This project is an application using a set of activity challenges for active lifestyles. The rationale for making this project was to use competition as a factor for friends to motivate friends to stay active. Users can challenge friends to different lifestyle challenges. The challenges range from rock climbing to running and or pretty much any activity imaginable. The end goal is to get people off of the couch and up doing something active.  



## Scaffold

````
├── config
│   └── connection.json
│
├── models
│    ├── index.js 
│    ├── challenge.js
│    └── user.js
│    └── acceptComplete.js
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   └── img
│   │
│   ├── js
│       ├── challenge.js
│       ├── user_profile.js
│       ├── create_challenge.js
│       ├── complete_challenge.js
│       └── create_user_profile.js  
│          
│── views/ layouts
│        ├── challenge.handlebars
│        ├── user_profile.handlebars
│        ├── new-challenge.handlebars
│        ├── feed.handlbars
│        
│
├── routes
│   ├── challenge-api-routes.js
│   ├── user-api-routes.js
│   └── html-routes.js
|   └── user-seed.js
|
│
├── controllers
│   ├── challenge-page-controller.js
│   ├── create-challenge-controller.js
│   └── home-controller.js
|   └── user-profile-controller.js 
│
|
├── seeders
│   ├── challenge-seed.js
│   ├── user-seed.js
│   
|
├── tests
│
├── node_modules
├── package.json
├── server.js
````
