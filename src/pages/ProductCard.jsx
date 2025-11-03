import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img 
        src={product.image_url || 'https://via.placeholder.com/150'} 
        alt={product.name} 
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p className="price">
        ${product.price !== undefined && product.price !== null && !isNaN(Number(product.price))
          ? Number(product.price).toFixed(2)
          : 'N/A'}
      </p>
    </div>
  );
};

export default ProductCard;
