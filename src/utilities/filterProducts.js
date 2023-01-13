const filterProducts = (products) => {
  return products.filter(
    (product) =>
      product.category === `men's clothing` ||
      product.category === `women's clothing`
  );
};

export default filterProducts;
