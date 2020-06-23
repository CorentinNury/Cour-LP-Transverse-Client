  
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import 'bootstrap/dist/css/bootstrap.min.css';
//npm install apollo-boost @apollo/react-hooks graphql

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

client.query({
    query: gql`
    query Assert{
      userSchemaAssert
    } 
    `
  })
  .then(result => console.log("Reponse from graphql:", result));

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();