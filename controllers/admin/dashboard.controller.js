//[GET] /admin/products
module.exports.dashboard = (req, res) => {
  res.render("admin/pages/dashboard/index.pug", {
    pageTitle: "Trang tổng quan",
  });
};
