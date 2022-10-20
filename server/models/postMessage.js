import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  dob: String,
  location: String,
  team: String,
  gender: String,
  sports: [String],
  about: String,
  interests: String,
  profileimg: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
