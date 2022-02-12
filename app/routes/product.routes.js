module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Products
    router.post("/", product.create);
  
    // Retrieve all products
    router.get("/", product.findAll);

    // Retrieve all products
    router.get("/", product.findAll);
  
    // Retrieve all products
    router.get("/", product.findAll);
    
    // Retrieve all published products
    router.get("/published", product.findAllPublished);
  
    // Retrieve a single Products with id
    router.get("/:idproduct", product.findOne);
  
    // Update a Products with id
    router.put("/:idproduct", product.update);
  
    // Delete a Tutorial with id
    router.delete("/:idproduct", product.delete);
  
    // Delete all Products
    router.delete("/", product.deleteAll);

    app.use('/api/products', router);
  };