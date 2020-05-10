import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Booklist from './components/BookList'
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Alex's Reading List</h1>
        <Booklist />
        <AddBook />
        <AddAuthor />
      </div>
    </ApolloProvider>
  );
}

export default App;
