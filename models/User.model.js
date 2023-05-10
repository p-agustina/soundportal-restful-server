const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: 
    { type: String,
      unique: true,
      required: true 
    },
    password: 
    { type: String,
      required: true 
    },
    name: 
    { type: String, 
      required: true 
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
      //   trim: true,
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