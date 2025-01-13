# Recipe Realm - A Recipe Sharing Platform

## Introduction:
The Recipe Sharing Platform is a web application designed to provide users with a centralized platform to discover, share, and explore culinary creations. It aims to bring together food enthusiasts, home cooks, and professional chefs to exchange recipes, cooking tips, and culinary experiences.

![image](https://github.com/CSCI-5828-S24/RecipeRealm/assets/53361534/1ced6896-31f4-4917-ae66-2a0bdb8c9518)


## Key Features:

User Authentication: Users can sign up for an account, log in securely, and manage their profiles.\
Recipe Discovery: Users can browse recipes by categories, search for specific recipes, and receive personalized recommendations.\
Recipe Details: Detailed recipe information including ingredients, cooking instructions, preparation time, and serving size.\
Social Interaction: Users can rate recipes, leave comments, share cooking experiences, and participate in community challenges.\
Recipe Contribution: Users can upload their own recipes, edit or delete them, and create collections or lists.\
Offline Access: Users can access recipes offline through downloadable or printable formats.


## Technology Stack:

Frontend: React.js for dynamic user interfaces and interactive components.\
Backend: Node.js and Express.js for server-side logic and API development.\
Database: MongoDB for storing recipe data, user profiles, and interactions.\
Additional Libraries: Axios for HTTP requests, and Mongoose for MongoDB object modeling.

## Deploying the System

For deploying our Recipe Sharing Platform, we've chosen Heroku as our cloud infrastructure provider. Heroku offers a robust and scalable environment for hosting web applications, and for front-end we have chosen netlify. Explained further in the final submission wiki.


## Design Decisions

In designing our Recipe Sharing Platform, we've focused on creating a user-friendly and intuitive interface that encourages engagement and collaboration among our users. We've adopted a clean and minimalist design aesthetic, prioritizing readability and ease of navigation. Additionally, we've implemented responsive design principles to ensure our platform is accessible across devices of all sizes, from desktops to smartphones.

In terms of architecture, we've embraced a microservices approach, decoupling our frontend and backend components to promote scalability and maintainability. Our frontend React.js application communicates with our backend Node.js and Express.js API through RESTful endpoints, enabling modular development and independent scaling of frontend and backend services.

## Team Coordination Processes

To coordinate our team and manage project tasks, we're utilizing GitHub Projects as our project management tool. We've created a Kanban-style board in GitHub Projects, with columns representing different stages of our development workflow, such as To Do, In Progress, Review, and Done. This allows us to visualize the progress of our tasks and track their status in real-time.

In addition to GitHub Projects, we're using iMessages for real-time communication and collaboration among team members. iMessages provides a convenient platform for quick discussions, sharing updates, and resolving any issues or blockers that arise during the development process.

## Work Distribution Across the Team

For each iteration of development, we've divided and assigned tasks to team members based on their expertise and availability. We've outlined the scope of work for each iteration in our GitHub Projects board, breaking down larger features into smaller, actionable tasks with clear timelines and dependencies.

Our frontend developers are responsible for implementing user authentication, recipe discovery features, and user profile management on the frontend React.js application. Meanwhile, our backend developers are tasked with developing RESTful APIs, integrating with MongoDB for data storage, and implementing social interaction features like rating, commenting, and notifications on the backend Node.js and Express.js application.

Throughout the development process, we conduct regular stand-up meetings to discuss progress, address any challenges or blockers, and ensure alignment across team members. By distributing work effectively and maintaining open communication channels, we're able to collaborate efficiently and deliver high-quality features on schedule.

