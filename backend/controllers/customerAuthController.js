const Customer =
require("../models/Customer");

const jwt =
require("jsonwebtoken");

exports.sendOTP =
async (req, res) => {

  try {

    const { mobile } =
    req.body;

    if (!mobile) {

      return res.status(400)
      .json({
        success: false,
        message:
        "Mobile Number Required",
      });
    }

    let customer =
    await Customer.findOne({
      mobile,
    });

    if (!customer) {

      customer =
      await Customer.create({
        mobile,
        otp: "123456",
      });

    } else {

      customer.otp =
      "123456";

      await customer.save();
    }

    res.json({

      success: true,

      message:
      "OTP Sent Successfully",

      otp: "123456",
    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
      error.message,
    });
  }
};

exports.verifyOTP =
async (req, res) => {

  try {

    const {
      mobile,
      otp,
    } = req.body;

    const customer =
    await Customer.findOne({
      mobile,
    });

    if (
      !customer ||
      customer.otp !== otp
    ) {

      return res.status(400)
      .json({

        success: false,

        message:
        "Invalid OTP",
      });
    }

    const token =
    jwt.sign(

      {
        id:
        customer._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn:
        "7d",
      }
    );

    res.json({

      success: true,

      token,
    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
      error.message,
    });
  }
};