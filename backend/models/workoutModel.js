const mongoose = require("mongoose");

const workOutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    set: {
      type: Number,
      require: true,
    }, // 3 Number of repetitions
    rep: {
      type: Number,
      require: true,
    }, // 30 Total number of exercises
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkOut", workOutSchema);
