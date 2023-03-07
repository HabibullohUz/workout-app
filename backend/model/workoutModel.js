const mongoose = require('mongoose')
const workoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    set: {
      type: Number,
      required: true,
    },

    rep: {
      type: Number,
      required: true,
    },
  }, { timestaps: true }
)

module.exports = mongoose.model("workout", workoutSchema)