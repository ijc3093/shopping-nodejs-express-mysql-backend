const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.name = product.name;
  this.artist = product.artist;
  this.year = product.year;
  this.datepost = product.datepost;
  this.datestart = product.datestart;
  this.numberallowed = product.numberallowed;
  this.venus = product.venus;
  this.description = product.description;
  this.image = product.image;
  this.location_image = product.location_image;
  this.video = product.video;
  this.location_video = product.location_video;
  this.time = product.time;
  this.qrCodeImage = product.qrCodeImage;
  this.whoisposted = product.whoisposted;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created product: ", { idproduct: res.insertId, ...newProduct });
    result(null, { idproduct: res.insertId, ...newProduct });
  });
};

Product.findById = (idproduct, result) => {
  sql.query(`SELECT * FROM product WHERE idproduct = ${idproduct}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the idproduct
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("product: ", res);
    result(null, res);
  });
};

Product.getAllImage = result => {
  sql.query("SELECT image FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("product: ", res);
    result(null, res);
  });
};


Product.updateById = (idproduct, product, result) => {
  sql.query(
    "UPDATE product SET name = ?, description = ?, price = ?, discounted_price = ?, image = ?, image_2 = ?, thumbnail = ?, display = ? WHERE idproduct = ?",
    [product.name, product.description, product.price, product.discounted_price, product.image, product.image_2, product.thumbnail, product.display, idproduct],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Product with the idproduct
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { idproduct: idproduct, ...product });
      result(null, { idproduct: idproduct, ...product });
    }
  );
};

Product.remove = (idproduct, result) => {
  sql.query("DELETE FROM product WHERE idproduct = ?", idproduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the idproduct
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with idproduct: ", idproduct);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} product`);
    result(null, res);
  });
};


module.exports = Product;
