import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`


const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorid: ID!){
        addBook(name:$name, genre:$genre, authorid:$authorid){
            name
            id
        }
    }
`

const addAuthorMutation = gql`
    mutation($name: String!){
        addAuthor(name:$name){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                books{
                    name
                    id
                }
            }
        }
    }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery, addAuthorMutation };