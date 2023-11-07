## Getting Started

To get started with this project, follow these steps:

1.  Start the project using Docker Compose:

    ```bash
    docker-compose up

    ```

2.  Create one chart record:

    curl --location 'http://localhost:3000/cart' \
    --header 'Content-Type: application/json' \
    --data '{
    "name": "Test name",
    "price": 40.0
    }'

3.  To get the cart's list:

    curl --location 'http://localhost:3000/cart'
