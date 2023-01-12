const CardModal = require("../models/card.model.js");

// Create and Save a new cards
exports.createCardDetails = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a card
  const card = new CardModal({
    UserName: req.body.userName,
    CardNumber: req.body.cardNumber,
    CardLimit: req.body.cardLimit,
    Balance: req.body.balance,  
  });

  // Save card in the database
  CardModal.createCardDetails(card, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all cards from the database.
exports.getAllCards = (req, res) => {
  const title = req.query.title;

  CardModal.getAllCards(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cards."
      });
    else res.send(data);
  });
};

