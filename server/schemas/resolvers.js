const { User, Thoughts } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return User.find();
    },
    thoughtsbydepartment: async(parent,{department})=> {
      try {
        const thought = await Thoughts.find({department});
        console.log(thought);
        return thought;
      } catch (error) {
        throw AuthenticationError;
      }
    }
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
    },
    deleteThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thoughts.findByIdAndDelete(thoughtId);
        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
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
    },
    deleteThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thoughts.findByIdAndDelete(thoughtId);
        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

};

module.exports = resolvers;
