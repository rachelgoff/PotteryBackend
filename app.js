const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./router");


mongoose.connect('mongodb://localhost/potteries');

const app = express();
app.use(morgan('combined'));

app.use('/v1', router)

// app.get('/',(req, res)=>{
//     res.send("Hello React Native!")
// })

const server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
