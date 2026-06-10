const LoanApplication = require("../models/LoanApplication");

exports.getAllApplications = async (req, res) => {
  try {

    const applications =
    await LoanApplication.find()
    .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getApplicationById = async (req, res) => {

  try {

    const application =
    await LoanApplication.findById(
      req.params.id
    );

    if (!application) {

      return res.status(404).json({
        success: false,
        message: "Application Not Found"
      });

    }

    res.status(200).json({
      success: true,
      data: application
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.updateApplicationStatus =
async (req, res) => {

  try {

    const application =
    await LoanApplication.findByIdAndUpdate(

      req.params.id,

      {
        status: req.body.status
      },

      {
        new: true
      }

    );

    res.status(200).json({

      success: true,

      message:
      "Status Updated Successfully",

      data: application

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }
};

exports.searchApplication =
async (req, res) => {

  try {

    const mobile =
    req.query.mobile;

    const applications =
    await LoanApplication.find({

      mobileNumber: mobile

    });

    res.status(200).json({

      success: true,

      count: applications.length,

      data: applications

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }
};

exports.filterApplication =
async (req, res) => {

  try {

    const loanType =
    req.query.loanType;

    const applications =
    await LoanApplication.find({

      loanType

    });

    res.status(200).json({

      success: true,

      count: applications.length,

      data: applications

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }
};

exports.dashboardStats =
async (req, res) => {

  try {

    const total =
    await LoanApplication.countDocuments();

    const approved =
    await LoanApplication.countDocuments({

      status: "Approved"

    });

    const rejected =
    await LoanApplication.countDocuments({

      status: "Rejected"

    });

    const pending =
    await LoanApplication.countDocuments({

      status: "Pending"

    });

    res.status(200).json({

      success: true,

      totalApplications: total,

      approved,

      rejected,

      pending

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }
};