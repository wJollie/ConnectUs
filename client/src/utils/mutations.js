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

  export const DELETETHOUGHT = gql`
  mutation deleteThought($thoughtId: ID!) {
    deleteThought(thoughtId: $thoughtId) {
      _id
      createdAt
      department
      thoughtAuthor
      thoughtText
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }`;

  export const ADDTHOUGHT = gql`
  mutation AddThought($thoughtText: String!, $department: String!) {
    addThought(thoughtText: $thoughtText, department: $department) {
      _id
      createdAt
      department
      thoughtAuthor
      thoughtText
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }`;


  
  