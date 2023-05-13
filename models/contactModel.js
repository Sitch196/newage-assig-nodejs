const mongoose = require("mongoose");
const validator = require("validator");

//validating all the inputs
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    validate: {
      validator: function (name) {
        return validator.isAlpha(name.replace(/\s/g, ""));
      },
      message: "Name can only contain letters",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [
      //validator.isEmail is a function from validator package
      {
        validator: validator.isEmail,
        message: "Please provide a valid email",
      },
      {
        // validating if email already exists
        validator: async function (email) {
          const contact = await mongoose.models.Contact.findOne({ email });
          return !contact;
        },
        message: "Email already exists",
      },
    ],
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
    unique: true,
    validate: [
      {
        // validating if phone number is valid
        validator: function (phone) {
          return /^\d{9,12}$/.test(phone);
        },
        message:
          "Phone number can only contain numbers and must be between 9 and 12 digits",
      },
      {
        // validating if phone already exists
        validator: async function (phone) {
          const contact = await mongoose.models.Contact.findOne({ phone });
          return !contact;
        },
        message: "Phone number already exists",
      },
    ],
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
