const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    vote: { type: Number, default: 0 },
    views: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

questionSchema.index({ title: "text" });
questionSchema.index({ tags: 1 });

module.exports = mongoose.model("Question", questionSchema);
