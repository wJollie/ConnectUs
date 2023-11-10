const { User, Thoughts } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      users: async (parent, args) => {
      return User.find();
    },
  },
  Mutation: {
    addUser: async (parent, {username, password}) => {
      const user = await User.create({username, password});
      const token = signToken(user);
      return {token, user};
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);  

      return { token, user };
    },
    addThought: async (parent, {thoughtText, department}, context) => {
      const thought = await Thoughts.create({thoughtText, department, thoughtAuthor: context.user.username});
      return thought;
    }
  },
};

module.exports = resolvers;
