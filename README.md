# Jamaica Crime Statistics API
This is a Node.js REST API built with Express and PostgreSQL providing crime statistics for Jamaica between the years 2011-2018. 


## Endpoints

The API provides the following endpoints for retrieving, adding, updating, and deleting crime statistics.

* `GET /api/v0/crimes`: Returns all crime data from the database
* `GET /api/v0/crimes/{id}`: Returns a specific statistic from the database
* `POST /api/v0/crimes/{id}`: Adds data to the database
* `PUT /api/v0/crimes/{id}`: Updates data in the database
* `DELETE /api/v0/crimes/{id}`: Removes an entry from the database

## Features

This API provides a comprehensive set of crime statistics for Jamaica, including information about the type, location, date, and severity of each crime. The data is sourced from reliable sources and is updated regularly, ensuring the accuracy of the results. Additionally, the API provides detailed documentation and support for developers who wish to utilize the data in their own applications.

## Architecture

The API is built with Node.js, Express, and PostgreSQL, allowing for a fast and reliable way to store, query, and manipulate data. The API also utilizes modern technologies such as JWT (JSON Web Token) for secure authentication and authorization.

## Getting Started

To get started using the API, please read the detailed documentation and follow the instructions provided. If you have any questions or need additional help, please reach out to our support team who will be more than happy to assist.
