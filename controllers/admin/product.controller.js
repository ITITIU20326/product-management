const Product = require("../../models/product.model");

//[GET] /admin/dashboard
module.exports.index = async (req, res) => {
  let fiterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.query.status) {
    const index = fiterStatus.findIndex(
      (item) => item.status == req.query.status,
    );
    fiterStatus[index].class = "active";
  } else {
    const index = fiterStatus.findIndex((item) => item.status == "");
    fiterStatus[index].class = "active";
  }

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const products = await Product.find(find);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Trang tổng quan",
    products: products,
    fiterStatus: fiterStatus,
  });
};
