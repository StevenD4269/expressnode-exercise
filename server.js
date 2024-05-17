const express = require("express");
const config = require("./config/index.js");
const router = require("./routes/index.js");


const app = express();

app.use(express.json());

// Handle all requests matching "/api" with router
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

console.log(config);
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
