const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  text: { type: String, required: true },
  vote: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answerId: { type: Schema.Types.ObjectId, ref: "Answer" },
});

module.exports = mongoose.model("Reply", replySchema);
