
# Overview
This project is a simple REST API built with node js that allows users to perform simple CRUD operations on a database.Database i've chosen no-sql mogodb atlas and data is saved directly in the cloud ,easier routing is done with express and 
 to query the data i used much simpler mongoose.
 
# Getting Started
To get started with this project, follow these steps:


- **Clone** this repository to your local machine.

- **CD** into the project directory.

- Run **npm i** to install the project dependencies.

- Run **npm run dev** to start the server.


# API Endpoints
The following endpoints are available:

GET /api/v1/contacts - Returns a list of all contacts in the database.

GET /api/v1/contacts/:id - Returns information about a specific contact.

POST /api/v1/contacts - Adds a new contact to the database.

PATCH /api/v1/contacts/:id - Updates information about a specific contact.

DELETE /api/v1/contacts/:id - Deletes a specific contact from the database.

All responses are in JSON format.

# Dependencies
This project uses the following dependencies:

- Express
- MongoDB
- mongoose
- nodemon
- validator
