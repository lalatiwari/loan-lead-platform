require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
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
  "/api/customer",
  require(
    "./routes/customerAuthRoutes"
  )
);



app.use(
  "/api/loan",
  require("./routes/loanRoutes")
);

app.get("/", (req, res) => {
  res.send("Loan Backend Running");
});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On ${PORT}`
  );
});