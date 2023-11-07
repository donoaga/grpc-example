# Overview (gRPC=example)

This project comprises two NestJS microservices that communicate via gRPC. One microservice handles cart additions, and the other displays cart contents. A gateway simplifies client interactions, and Dockerization ensures easy setup and testing.

## Getting Started

To get started with this project, follow these steps:

1.  Start the project using Docker Compose:

    ```bash
    docker-compose up

    ```

    (for a faster set-up all the other steps like `npm install` were omitted)

2.  To create one chart record:

    ```curl
    curl --location 'http://localhost:3000/cart' \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "Test name",
    "price": 40.0
    }'

    ```

3.  To get the cart's list:

        ```curl
        curl --location 'http://localhost:3000/cart'

        ```

## Features

    * write-service: Adds items to the cart.
    * read-service: Retrieves and displays cart contents.
    * gateway: Orchestrates client requests.

## Technologies

    * NestJS: A scalable Node.js framework.
    * gRPC: High-performance inter-service communication.
    * Docker: Containerization for consistency.
    * TypeScript: Ensures code quality.

## Contribuitors

    ** Radu Donoaga
    ** donoaga.radu@gmail.com
