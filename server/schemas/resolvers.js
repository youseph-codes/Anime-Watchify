const { User, Anime } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('appolo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('dislikedMovies')
                    .populate({
                       path: 'likedMovies',
                       populate: {
                         path: 'likedUsers'
                       }
                    });;
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    }
}