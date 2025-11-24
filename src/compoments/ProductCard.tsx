import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const navigate = useNavigate();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{product.name}</h3>
      
      <div className="card-info">
        <p style={{ margin: '5px 0' }}><strong>Danh mục:</strong> {product.category}</p>
        <p style={{ margin: '5px 0', color: '#d32f2f', fontWeight: 'bold' }}>{formatPrice(product.price)}</p>
        <p style={{ margin: '5px 0' }}><strong>Kho:</strong> {product.quantity}</p>
      </div>

      <div className="actions" style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <button 
          onClick={() => navigate(`/products/${product.id}`)}
          style={{ flex: 1, padding: '5px', background: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Xem
        </button>
        <button 
          onClick={() => navigate(`/edit/${product.id}`)}
          style={{ flex: 1, padding: '5px', background: '#891a61ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sửa
        </button>
        <button 
          onClick={() => onDelete(product.id)}
          style={{ flex: 1, padding: '5px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ProductCard;