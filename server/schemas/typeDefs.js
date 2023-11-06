const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    winStreak: Int
    
    
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

  type Chat {
    _id: ID
    users: [User]
    messages: [Message]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    chat(chatId: ID!): Chat
    game(gameId: ID!): Game
    users: [User]
    # Add other queries for your project
  }

  type Mutation {
    addUser(username: String, password: String): Auth
    login(username: String, password: String): Auth
    sendMessage(chatId: ID!, content: String): Message
    playGame(gameId: ID!): String
    # Add other mutations for your project
  }
`;



module.exports = typeDefs;


