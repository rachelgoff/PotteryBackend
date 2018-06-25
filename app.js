const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./router");

mongoose.connect('mongodb://localhost/potteries');

const app = express();

app.use(morgan('combined'));

app.use('/v1', router)

const server = app.listen(8080, "0.0.0.0", () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
