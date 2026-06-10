require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

// 👇 Ye naya code add karo

app.use(
 "/api/admin",
 require("./routes/adminRoutes")
);

app.use(
  "/uploads",
  express.static("uploads")
);

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
"/api/admin",
require("./routes/adminRoutes")
);

app.use(
  "/api/loan",
  require("./routes/loanRoutes")
);

app.get("/", (req, res) => {
  res.send("Loan Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});