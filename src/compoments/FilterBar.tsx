import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterCategory: Category | 'All';
  setFilterCategory: (category: Category | 'All') => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  priceRange,
  setPriceRange
}) => {
  return (
    <div className="filter-bar" style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <input
          type="text"
          placeholder="Tìm tên sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as Category | 'All')}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="All">Tất cả danh mục</option>
          {['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <input
          type="number"
          placeholder="Min giá"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
          style={{ width: '80px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max giá"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
          style={{ width: '100px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default FilterBar;