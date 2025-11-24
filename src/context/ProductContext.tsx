import React, { createContext, useReducer, ReactNode } from 'react';
import { Product, initialProducts } from '../types';
import { productReducer, Action } from './productReducer';

interface ProductContextType {
  products: Product[];
  dispatch: React.Dispatch<Action>;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  dispatch: () => null,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};