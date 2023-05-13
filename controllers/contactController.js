const Contact = require("../models/contactModel");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().select("-__v");
    res.status(200).json({
      status: "success",
      results: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};

exports.createContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "New Contact Created Successfully",
    });
  } catch (err) {
    res.status(400);
    res.json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSingleContact = async (req, res) => {
  try {
    //find contact by id and select all fields except __v

    const contact = await Contact.findById(req.params.id).select("-__v");

    // if contact is not found with id then return error
    if (!contact) {
      return res.status(404).json({
        status: "failed",
        message: "No Contact Found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        contact,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateContact = async (req, res) => {
  try {
    //find contact by id and update it with new data
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      //runValidators: true is used to run all the validators in the schema
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      message: "Contact Updated Successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Contact Deleted Successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
