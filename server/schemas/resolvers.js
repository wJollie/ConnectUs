const { User } = require('../models');
const { AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // Existing queries for categories, products, users, orders, etc.
  },
  Mutation: {
    addUser: async (parent, args) => {
      // Modify this resolver to create users with username and password.
      // Implement password hashing here.
    },
    login: async (parent, { username, password }) => {
      // Modify this resolver to authenticate users based on username and password.
      // Check if the user exists and validate the password.
    },
    playGame: async (parent, { gameOutcome }, context) => {
      if (context.user) {
        // Perform game-related actions and update scores/win streak here.
        // You might also want to handle storing game results and scores.
      } else {
        throw AuthenticationError;
      }
    },
    // Add resolvers for other actions specific to your project, such as chat functionality.
  },
};

module.exports = resolvers;
