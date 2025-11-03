import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // npm install uuid
import ProductCard from './ProductCard';
import './ProductList.css'; // Your styles

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartUuid, setCartUuid] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // Generate or load cartUuid once
  useEffect(() => {
    let savedCartUuid = localStorage.getItem('cartUuid');
    if (!savedCartUuid) {
      savedCartUuid = uuidv4();
      localStorage.setItem('cartUuid', savedCartUuid);
    }
    setCartUuid(savedCartUuid);
  }, []);

  // Load products from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  // Load cart items from backend when cartUuid is ready
  useEffect(() => {
    if (!cartUuid) return;

    axios.get(`http://localhost:5000/api/cart/${cartUuid}`)
      .then(res => {
        setCart(res.data.items || []);
      })
      .catch(err => console.error('Failed to load cart', err));
  }, [cartUuid]);

  // Save cart items to backend on cart change
  useEffect(() => {
    if (!cartUuid) return;
    if (!cart.length) return; // optional: skip saving empty cart to reduce requests

    axios.post('http://localhost:5000/api/cart', { cartUuid, items: cart })
      .catch(err => console.error('Failed to save cart', err));
  }, [cart, cartUuid]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} added to cart!`);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + Number(item.price) * (item.quantity || 1), 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const cleanedItems = cart.map(item => ({
      name: item.name,
      price: Number(item.price),
      quantity: item.quantity,
      // Only include image_url if it's a non-empty string
      ...(item.image_url && item.image_url.trim() !== '' ? { image_url: item.image_url } : {})
    }));

    try {
      const response = await axios.post('http://localhost:5000/api/checkout', { items: cleanedItems, cartUuid });
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error('Stripe checkout error:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="store-container">
      <h1>Medicines Store</h1>
      <button className="view-cart-btn" onClick={() => setShowCart(true)}>
        View Cart ({cart.reduce((acc, i) => acc + (i.quantity || 1), 0)})
      </button>

      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id || product.name} // fallback key
            product={product}
            onClick={setSelectedProduct}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="product-details-modal" onClick={() => setSelectedProduct(null)}>
          <div className="product-details-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>X</button>
            <h2>{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={selectedProduct.name}
              className="product-details-image"
            />
            <p>{selectedProduct.description}</p>
            <p className="price">
              ${selectedProduct.price ? Number(selectedProduct.price).toFixed(2) : 'N/A'}
            </p>
            <button className="buy-now-btn" onClick={() => addToCart(selectedProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {!showCart && (
        <button
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Checkout with Stripe
        </button>
      )}

      {showCart && (
        <div
          className="cart-sidebar-overlay"
          onClick={() => setShowCart(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 1000,
          }}
        >
          <div
            className="cart-sidebar"
            onClick={e => e.stopPropagation()}
            style={{
              position: 'fixed',
              right: 0,
              top: 0,
              width: '350px',
              height: '100%',
              background: '#fff',
              boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
              padding: '24px',
              zIndex: 1001,
            }}
          >
            <h2>Your Cart</h2>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} x {item.quantity || 1} - ${Number(item.price).toFixed(2)}
                </li>
              ))}
            </ul>
            <p><strong>Total:</strong> ${getTotal()}</p>
            <button className="checkout-btn" onClick={handleCheckout} disabled={cart.length === 0}>
              Checkout with Stripe
            </button>
            <button className="close-btn" onClick={() => setShowCart(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
