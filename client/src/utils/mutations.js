import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
}
`;

export const ADD_USER = gql`
    mutation login($username: String!, $email: String!, $password: String!) {
        login(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
}
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: SaveBookInput!) {
        saveBook(book: $book) {
            username
            email
            bookCount
            savedBook {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            email
            bookCount
            savedBooks {
                authors
                dscription
                bookId
                image
                link
                title
            }
        }
    }
`;