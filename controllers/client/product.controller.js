module.exports.index = async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    res.render("client/pages/products/index.pug", {
      pageTitle: "Sản phẩm",
      products: data.products || [],
    });
  } catch (error) {
    console.error("Không lấy được dữ liệu sản phẩm:", error);

    res.render("client/pages/products/index.pug", {
      pageTitle: "Sản phẩm",
      products: [],
    });
  }
};
