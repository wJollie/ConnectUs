import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      messages {
        _id
        messageText
        createdAt
      }
    }
  }
`;

export const QUERY_MESSAGE = gql`
  query getMessage {
    messages {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const THOUGHTSBYDEPT=gql`
query thoughtsbydepartment($department: String!) {
  thoughtsbydepartment(department: $department) {
    _id
    thoughtText
    thoughtAuthor
    createdAt
    department
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}`;