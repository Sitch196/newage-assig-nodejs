const express = require("express");
const app = express();
app.use(express.json());

const contactRouter = require("./routes/contactRoutes");

app.use("/api/v1/contacts", contactRouter);

// middleware to handle all unhandled routes
app.all("*", (req, res, next) => {
  const err = new Error(`Cannot find ${req.originalUrl} on this server!`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

// middleware to handle all errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
module.exports = app;
