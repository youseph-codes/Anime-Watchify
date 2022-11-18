<<<<<<< HEAD
const { User, Anime } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('appolo-server-express');

const resolvers = {
    
}
=======
const { AuthenticationError } = require("apollo-server-express");
const { User, Description } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // users: async () => {
    //   return User.find().select("-__v -password").populate("descriptions");
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username })
    //     .select("-__v -password")
    //     .populate("descriptions");
    // },
    // descriptions: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Description.find(params).sort({ createdAt: -1 });
    // },
    // description: async (parent, { _id }) => {
    //   return Description.findOne({ _id });
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    // addDescription: async (parent, args, context) => {
    //   if (context.user) {
    //     const description = await Description.create({
    //       ...args,
    //       username: context.user.username,
    //     });

    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { descriptions: description._id } },
    //       { new: true }
    //     );

    //     return description;
    //   }

    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

module.exports = resolvers;
>>>>>>> cb057b068c629d63b05f2533a92c1ee2139dc46e
