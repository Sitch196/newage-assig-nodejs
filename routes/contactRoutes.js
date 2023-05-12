const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();
//////////////////////////////////////////////

router
  .route("/")
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

router
  .route("/:id")
  .get(contactController.getSingleContact)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
