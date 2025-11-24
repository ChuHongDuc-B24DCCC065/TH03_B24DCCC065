import React, { useContext } from 'react';
import ProductForm from '../compoments/ProductForm';
import { ProductContext } from '../context/ProductContext';

const AddProductPage = () => {
  const { dispatch } = useContext(ProductContext);

  return (
    <ProductForm 
      title="Thêm Sản Phẩm Mới" 
      onSubmit={(product) => dispatch({ type: 'ADD_PRODUCT', payload: product })}
    />
  );
};

export default AddProductPage;