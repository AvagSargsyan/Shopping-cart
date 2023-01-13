const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: '200px',
          width: '200px',
        }}
      />
      <div>{product.title}</div>
      <div>${product.price}</div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
