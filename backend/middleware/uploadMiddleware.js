const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    let folder = "uploads";

    if (file.fieldname === "aadhaar") {
      folder = "uploads/aadhaar";
    }

    if (file.fieldname === "pan") {
      folder = "uploads/pan";
    }

    if (file.fieldname === "salarySlip") {
      folder = "uploads/salary-slip";
    }

    if (file.fieldname === "bankStatement") {
      folder = "uploads/bank-statement";
    }

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() +
      "-" +
      file.originalname
    );
  }
});

const fileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg"
  ];

  if (
    allowedTypes.includes(
      file.mimetype
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF/JPG/PNG allowed"
      )
    );
  }
};

module.exports = multer({

  storage,

  limits: {
    fileSize:
      10 * 1024 * 1024
  },

  fileFilter
});