import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  const { products, dispatch } = useContext(ProductContext);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct);
    }
  }, [id, products]);

 
  const handleDelete = () => {
    if (product && window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      dispatch({ type: 'DELETE_PRODUCT', payload: product.id });
      navigate('/'); 
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Không tìm thấy sản phẩm!</h2>
        <button onClick={() => navigate('/')}>Quay về trang chủ</button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: '20px', padding: '5px 10px', cursor: 'pointer' }}
      >
        &larr; Quay lại
      </button>

      <div className="detail-card" style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          {product.name}
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '20px 0' }}>
          <div>
            <p><strong>Danh mục:</strong> <span style={{ background: '#e3f2fd', padding: '2px 8px', borderRadius: '4px', color: '#1565c0' }}>{product.category}</span></p>
            <p><strong>Giá bán:</strong> <span style={{ fontSize: '1.2em', color: '#d32f2f', fontWeight: 'bold' }}>{formatPrice(product.price)}</span></p>
            <p><strong>Tình trạng kho:</strong> {product.quantity > 0 ? `${product.quantity} sản phẩm` : <span style={{color: 'red'}}>Hết hàng</span>}</p>
          </div>
          
          <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
             <p><strong>Mã sản phẩm (ID):</strong> #{product.id}</p>
             <div style={{ width: '100%', height: '100px', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginTop: '10px' }}>
                Ảnh minh họa
             </div>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Mô tả chi tiết:</h3>
          <p style={{ lineHeight: '1.6', color: '#555', whiteSpace: 'pre-wrap' }}>
            {product.description || "Chưa có mô tả cho sản phẩm này."}
          </p>
        </div>

        <div className="actions" style={{ marginTop: '30px', display: 'flex', gap: '15px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link 
            to={`/edit/${product.id}`} 
            style={{ textDecoration: 'none', background: '#67a62cff', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
          >
            Chỉnh sửa
          </Link>
          
          <button 
            onClick={handleDelete}
            style={{ background: '#f44336', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
          >
            Xóa sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;