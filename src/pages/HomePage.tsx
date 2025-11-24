import React, { useContext, useState, useMemo } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import ProductCard from '../compoments/ProductCard'; 
import FilterBar from '../compoments/FilterBar';     
const ITEMS_PER_PAGE = 6;

const HomePage = () => {
  const { products, dispatch } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000000 });
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = filterCategory === 'All' || p.category === filterCategory;
      const matchPrice = p.price >= priceRange.min && p.price <= priceRange.max;
      return matchName && matchCategory && matchPrice;
    });
  }, [products, searchTerm, filterCategory, priceRange]);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Xóa sản phẩm này?')) {
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    }
  };

  
  const handleSearchChange = (term: string) => { setSearchTerm(term); setCurrentPage(1); };
  const handleCategoryChange = (cat: Category | 'All') => { setFilterCategory(cat); setCurrentPage(1); };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Quản lý sản phẩm</h1>
        <Link to="/add" style={{ padding: '10px 20px', background: '#4caf50', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          + Thêm Mới
        </Link>
      </div>
      
      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={handleSearchChange}
        filterCategory={filterCategory}
        setFilterCategory={handleCategoryChange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onDelete={handleDelete} 
            />
          ))
        ) : (
          <p>Không tìm thấy sản phẩm nào.</p>
        )}
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Previous</button>
        <span style={{ lineHeight: '25px' }}>Trang {currentPage} / {totalPages || 1}</span>
        <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;