const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },

    name: {
      type: String,
      trim: true,
      required: true,

    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    profileImg: {
      type: String
    },
    music: [{
      type: Schema.Types.ObjectId,
      ref: 'Song',
  }],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    password: {
      type: String,
      required: true
    },
    playlist: [{
      type: Schema.Types.ObjectId,
      ref: 'Song',
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;