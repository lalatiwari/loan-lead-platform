const bcrypt = require("bcryptjs");

(async () => {

  const password = await bcrypt.hash(
    "admin123",
    10
  );

  console.log(password);

})();