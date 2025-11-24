import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../compoments/ProductForm';
import { ProductContext } from '../context/ProductContext';

const EditProductPage = () => {
  const { id } = useParams();
  const { products, dispatch } = useContext(ProductContext);
  const productToEdit = products.find(p => p.id === Number(id));

  if (!productToEdit) return <div>Không tìm thấy sản phẩm!</div>;

  return (
    <ProductForm 
      title="Chỉnh Sửa Sản Phẩm" 
      initialData={productToEdit}
      onSubmit={(product) => dispatch({ type: 'UPDATE_PRODUCT', payload: product })}
    />
  );
};

export default EditProductPage;