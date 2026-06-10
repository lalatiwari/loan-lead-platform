const LoanApplication =
require("../models/LoanApplication");

exports.applyLoan =
async (req, res) => {

  try {

    const {
      fullName,
      mobileNumber,
      email,
      city,
      loanType,
      loanAmount,
      consent
    } = req.body;

    const application =
    await LoanApplication.create({

      fullName,
      mobileNumber,
      email,
      city,
      loanType,
      loanAmount,

      aadhaarUrl:
        req.files?.aadhaar?.[0]
          ?.path || "",

      panUrl:
        req.files?.pan?.[0]
          ?.path || "",

      salarySlipUrl:
        req.files?.salarySlip?.[0]
          ?.path || "",

      bankStatementUrl:
        req.files?.bankStatement?.[0]
          ?.path || "",

      consent
    });

    res.status(201).json({

      success: true,

      message:
      "Application Submitted Successfully",

      data: application
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
      error.message
    });
  }
};