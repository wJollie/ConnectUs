import { gql } from '@apollo/client';

export const ADDUSER = gql`
mutation addUser($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        password
        username
      }
    }
  } `;

export const LOGIN = gql`
mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        password
        username
      }
    }
  }`;

  