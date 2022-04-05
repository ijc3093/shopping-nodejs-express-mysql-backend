const Product = require("../models/product.model.js");
const QrCode = require("../models/product.model.js");
const fs = require("fs");

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const product = new Product({
    name: req.body.name,
    artist: req.body.artist,
    year: req.body.year,
    datepost: req.body.datepost,
    datestart: req.body.datestart,
    numberallowed: req.body.numberallowed,
    venue: req.body.venue,
    description: req.body.description,
    image: req.body.image,
    location_image: req.body.location_image,
    video: req.body.video,
    location_video: req.body.location_video,
    time: req.body.time,
    qrCodeImage: req.body.qrCodeImage,
    whoisposted: req.body.whoisposted
  });


  // Save Product in the database
  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product."
      });
    else res.send(data);
  });
};


// Find a single Product with a idproduct
exports.findOne = (req, res) => {
  Product.findById(req.params.idproduct, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with idproduct ${req.params.idproduct}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Product with idproduct is " + req.params.idproduct
        });
      }
    } else res.send(data);
  });
};


// Update a Product identified by the ProductId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Product.updateById(
    req.params.idproduct,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.idproduct}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.idproduct
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a product with the specified idproduct in the request
exports.delete = (req, res) => {
  Product.remove(req.params.idproduct, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Product with id ${req.params.idproduct}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Product with id " + req.params.idproduct
        });
      }
    } else res.send({ message: `Product was deleted successfully!` });
  });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  Product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all product."
      });
    else res.send({ message: `All Products were deleted successfully!` });
  });
};

// Find all published products
exports.findAllPublished = (req, res) => {
  Product.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};