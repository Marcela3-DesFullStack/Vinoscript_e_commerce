# Vinoscript APP (Backend)

This project implements a simple REST API using Node.js and Express to manage wine types. It connects to a MySQL database to store and retrieve data.

## Features

* Create, read, update, and delete (CRUD) operations for wine types
* Get all wine types (`GET /tipos`)
* Get a specific wine type by ID (`GET /tipos/:id`)
* Add a new wine type (`POST /tipos`)
* Modify an existing wine type (`PUT /tipos/:id`)
* Delete a wine type (`DELETE /tipos/:id`)

## Getting Started

**Prerequisites:**

* Node.js and npm (or yarn) installed
* A MySQL database server

**Installation:**

1. Clone this repository:

   ```bash
   git clone https://github.com/Marcela3-DesFullStack/Vinoscript_e_commerce


### Install dependencies

npm install

### Configuration:

Create a .env file in the project root directory with the following environment variables:

HOST=your_mysql_host
DATABASE=your_mysql_database
USER=your_mysql_user
PASSWORD=your_mysql_password
Replace your_mysql_host, your_mysql_database, your_mysql_user, and your_mysql_password with your actual MySQL credentials.

### Running the API:

Start the API server:

Bash
npm start
Usa el código con precaución.
The API will be listening on port 4000.

### API Endpoints
Base URL: http://localhost:4000

Method	Path	Description
GET	/tipos	Get all wine types
GET	/tipos/:id	Get a specific wine type by ID
POST	/tipos	Add a new wine type
PUT	/tipos/:id	Modify an existing wine type
DELETE	/tipos/:id	Delete a wine type

### Request Body:

For POST and PUT requests, the request body should be a JSON object with the following structure:

JSON
{
  "tipo_vino": "Your wine type name"
}
### Warning to use code.

## Response:

The response will be a JSON object containing the requested data or an error message.

### Contributing

We welcome contributions to this project! Please create pull requests with your proposed changes and follow the contribution guidelines outlined in the CONTRIBUTING.md file.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Additional Notes:

You may need to create the tipos_vinos table in your MySQL database before running the API.
The provided code snippet assumes the table structure includes an id column as the primary key.
Consider adding more error handling and validation to your API endpoints.
You can further enhance the API by adding authentication, authorization, and other features.
I hope this comprehensive README.md file helps you effectively use and contribute to your Vino API project!
