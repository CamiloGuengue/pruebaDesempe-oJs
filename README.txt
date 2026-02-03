about this project
CRUDTASK is a task management project, part of a CRUDZASO-type initiative, a way to test knowledge in certain areas.

The platform allows a team to assign and manage tasks internally. This project aims to provide a clear understanding of how different types of JSON-SERVER queries work and how to manipulate information in real time.


Features

Authentication system
- The system recognizes the user type, whether admin or user.

- Validation is performed in sessionStorage.
- It has a functional logout.


CRUD
- The system allows the admin to create tasks and assign them to different active users.
- Users can view their assigned tasks and delete them upon completion.
- This can be done in real time.

Profile based on login:
- The system has a profile tab that loads the information of the logged-in user in real time.


structure
CRUDTASK/
│
├── db.json                   # archivo JSON con datos
├── fetch.js                  # Consumo de datos con fetch
│
├── home/
│   ├── admin.html           # home of admin
│   ├── adminStyle.css       # admin styles
│   ├── home.js              # funcionalidad home
│   └── user.html            # profile of user
│   ├── user.js              # funcionalidad user
│   ├── userStyle.css        # style of home user
│   
│
├── login/
│   ├── index.html           # index main login
│   ├── index.js             # funcionalidad login
│   ├── signUp.html          # html for register
│   ├── signUp.js            # register functionality
│   └── style.css 	     # style for register
│
├── profile/
│   ├── adminProfile.html    # profile of admin
│   ├── profile.html         # profile of users
│   ├── profile.js           # profile users functionality
│   └── styleProfile.css     # style for profile
│
│
└── README.md

