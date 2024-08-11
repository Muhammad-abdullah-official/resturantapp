import PropTypes from 'prop-types';
import '../assets/styles/Products.css';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: {product.price} Rs/-</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItem;
