import { useState } from 'react'; // Make sure to import useState
import ProductItem from '../components/ProductItem';
import Cart from '../components/Cart';
import '../assets/styles/Products.css';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Pizza', price: 900 },
    { id: 2, name: 'Burger', price: 350 },
    { id: 3, name: 'Pasta', price: 250 },
    { id: 4, name: 'Fries', price: 50 },
    { id: 5, name: 'Biryani', price: 250 },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Products;
