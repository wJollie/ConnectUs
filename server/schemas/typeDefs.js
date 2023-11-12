const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String

  }

  type Message {
    _id: ID
    user: User
    content: String
    timestamp: String
  }

  type Game {
    _id: ID
    name: String
    # Add other game-related fields
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Chat {
    _id: ID
    users: [User]
    messages: [Message]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    department: String
    comments: [Comment]
  }

  type Query {
    user: User
    chat(chatId: ID!): Chat
    game(gameId: ID!): Game
    users: [User]
    # Add other queries for your project
    thoughtsbydepartment(department:String!):[Thought]
  }

  type Mutation {
    addUser(username: String, password: String): Auth
    login(username: String, password: String): Auth
    addThought(thoughtText: String!, department: String!): Thought
    sendMessage(chatId: ID!, content: String): Message
    playGame(gameId: ID!): String
    # Add other mutations for your project
  }

  
`;

module.exports = typeDefs;
