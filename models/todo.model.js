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
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
