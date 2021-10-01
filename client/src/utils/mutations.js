//import GraphQL
import gql from "graphql-tag";

//export login mutation for GraphQL
export const LOGIN_USER  = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            bookCount
            savedBooks {
            bookId
            title
            description
            authors
            image
            link
            }
        }
        }
    }
`;
//export add user mutation for GraphQL
export const ADD_USER  = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;
//export save book mutation for GraphQL
export const SAVE_BOOK  = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;
//export remove book mutation for GraphQL
export const REMOVE_BOOK  = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;