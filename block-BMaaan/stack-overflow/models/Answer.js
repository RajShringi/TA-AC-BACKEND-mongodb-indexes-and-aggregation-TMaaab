const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  text: { type: String, required: true },
  vote: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }],
  questionId: { type: Schema.Types.ObjectId, ref: "Question" },
});

module.exports = mongoose.model("Answer", answerSchema);
