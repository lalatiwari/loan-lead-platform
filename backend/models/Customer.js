const mongoose = require("mongoose");

const customerSchema =
new mongoose.Schema(
{
  mobile: {
    type: String,
    required: true,
    unique: true,
  },

  otp: {
    type: String,
    default: "",
  },
},
{
  timestamps: true,
}
);

module.exports =
mongoose.model(
  "Customer",
  customerSchema
);