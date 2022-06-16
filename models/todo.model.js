const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    note: String,
    isDone: {
        type: Boolean,
        required: true,
        default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
