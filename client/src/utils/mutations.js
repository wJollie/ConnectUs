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
mutation login($username: String, $password: String) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        password
        username
      }
    }
  }`;

  export const ADDTHOUGHT = gql`
  mutation addThought($thoughtText: String!, $department: String!) {
    addThought(thoughtText: $thoughtText, department: $department) {
      _id
      thoughtText
      createdAt
      username
      department
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }`;
  
  