const Product = require("../../models/product.model");

//[GET] /products
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });

  const newProducts = products.map((item) => {
    const product = item.toObject();

    product.priceNew = `${product.price}$`;
    product.priceOld = `${Math.round(
      product.price / (1 - product.discountPercentage / 100),
    )}$`;
    product.discount = `-${Math.round(product.discountPercentage)}%`;

    return product;
  });

  res.render("client/pages/products/index.pug", {
    pageTitle: "Danh sách sản phẩm",
    products: newProducts,
  });
};
