const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");


dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3001, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.use(bodyParser.json()).post("/api/email", (req, res) => {
//    
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
