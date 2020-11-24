# GQL Drink Manager Wiki

Welcome to the GQL Drink Manager Wiki!

This is a simple single page full-stack application built using GraphQL, Ariadne, React, Flask, Python, Material-UI, and Javascript. This application was completed with help from [this article](https://blog.sethcorker.com/how-to-create-a-react-flask-graphql-project).

The backend of this application may be started by cloning the repo, entering into the "server" folder, entering the command "pipenv shell", and then entering the command "flask run."

The frontend may be started by entering into the "client" folder and entering the command "npm start." It is set to run on http://localhost:3000.

<br />

## Interacting with the Application from the Frontend:

This application supports a single GQL query and two mutations. By selecting "Order Beer", you are running the "orderBeer" mutation and adding a "Beer" object to the orders list.

The application then queries all orders.

By selecting the "X" icon, you are running the "removeBeer mutation and deleting a "Beer" object from the orders list.

<img src="https://wegroovybaby.s3.amazonaws.com/Screen+Shot+2020-11-24+at+10.21.08+AM.png">

<img src="https://wegroovybaby.s3.amazonaws.com/Screen+Shot+2020-11-24+at+10.21.27+AM.png">


<br />

## Interacting with the Application from the Backend (GraphQL Playground):

This application supports the GraphQL Playground through Ariadne. You may enter queries and mutations at localhost:5000/graphql.

<img src="https://wegroovybaby.s3.amazonaws.com/Screen+Shot+2020-11-24+at+10.21.46+AM.png">

<img src="https://wegroovybaby.s3.amazonaws.com/Screen+Shot+2020-11-24+at+10.21.59+AM.png">
