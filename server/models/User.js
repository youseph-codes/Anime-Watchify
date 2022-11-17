const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Description.js
const descriptionSchema = require("./Description");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // new code
    // set savedDescriptions to be an array of data that adheres to the descriptionSchema
    savedDescriptions: [descriptionSchema],
  },
  //   set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// new code
//when we query a user
userSchema.virtual("descriptionCount").get(function () {
  return this.savedDescriptions.length;
});

const User = model("User", userSchema);

module.exports = User;
