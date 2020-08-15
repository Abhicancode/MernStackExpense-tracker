const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },

  amount: {
    type: Number,
    required: [true, "Please add a pos or neg number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = Transaction;
