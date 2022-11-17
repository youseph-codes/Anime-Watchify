const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const descriptionSchema = new Schema(
  {
    name: {
      type: String,
      required: 'You need to leave a description!',
      // minlength: 1,
      // maxlength: 280
    },
    // this code uncomment with dateFormat on top
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // },
    username: {
      type: String,
      required: true
    }
  }
  // ,{
  //   toJSON: {
  //     getters: true
  //   }
  // }
);

// const Description = model('Description', descriptionSchema);
// module.exports = Description;

//New code
module.exports = descriptionSchema;