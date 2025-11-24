import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, Category } from '../types';

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (product: Product) => void;
  title: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, title }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Product>({
    id: Date.now(), 
    name: '',
    category: 'Khác',
    price: 0,
    quantity: 0,
    description: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (formData.name.length < 3) newErrors.name = 'Tên phải từ 3 ký tự trở lên';
    if (formData.price <= 0) newErrors.price = 'Giá phải là số dương';
    if (formData.quantity <= 0 || !Number.isInteger(formData.price)) newErrors.quantity = 'Số lượng phải là số nguyên dương';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div>
          <label>Danh mục:</label>
          <select 
            value={formData.category}
            onChange={e => setFormData({...formData, category: e.target.value as Category})}
          >
             {['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'].map(c => (
               <option key={c} value={c}>{c}</option>
             ))}
          </select>
        </div>

        <div>
          <label>Giá:</label>
          <input 
            type="number" 
            value={formData.price} 
            onChange={e => setFormData({...formData, price: Number(e.target.value)})} 
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>

        <div>
          <label>Số lượng:</label>
          <input 
            type="number" 
            value={formData.quantity} 
            onChange={e => setFormData({...formData, quantity: Number(e.target.value)})} 
          />
          {errors.quantity && <span className="error">{errors.quantity}</span>}
        </div>

        <div>
          <label>Mô tả:</label>
          <textarea 
            value={formData.description} 
            onChange={e => setFormData({...formData, description: e.target.value})} 
          />
        </div>

        <button type="submit">Lưu</button>
        <button type="button" onClick={() => navigate('/')} style={{marginLeft: 10}}>Hủy</button>
      </form>
    </div>
  );
};

export default ProductForm;