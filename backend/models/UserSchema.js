import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["player", "admin"],
    default: "player",
  },
  exp: {
    type: Number,
    default: 0,
  },
  finishedCourses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Cours',
    default: []
  },
});

export default mongoose.model("User", UserSchema);
