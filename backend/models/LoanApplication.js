const mongoose = require("mongoose");

const loanApplicationSchema =
new mongoose.Schema(
{
  fullName: {
    type: String,
    required: true
  },

  mobileNumber: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  loanType: {
    type: String,
    required: true
  },

  loanAmount: {
    type: Number,
    required: true
  },

  aadhaarUrl: String,
  panUrl: String,
  salarySlipUrl: String,
  bankStatementUrl: String,

  consent: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    default: "Pending"
  }
},
{
  timestamps: true
}
);

module.exports =
mongoose.model(
  "LoanApplication",
  loanApplicationSchema
);