const express = require("express");
const app = express();
app.use(express.json());

const contactRouter = require("./routes/contactRoutes");

app.use("/api/v1/contacts", contactRouter);

module.exports = app;
