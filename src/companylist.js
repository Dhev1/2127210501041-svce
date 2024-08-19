import React, { useState } from 'react';
import './companylist.css'; 
import ProductList from './productlist';

const CompanyList = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  const companies = ["AMZ", "FLP","SNP", "MYN","AZO"];

  const handleCompanyClick = async (company) => {
    setSelectedCompany(company);
    const response = await fetch(`http://localhost:5000/products?company=${company}&minPrice=${minPrice}&maxPrice=${maxPrice}&productName=${productName}`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="company-list">
      <h2>Select a Company</h2>
      <ul>
        {companies.map(company => (
          <li key={company} onClick={() => handleCompanyClick(company)}>
            {company}
          </li>
        ))}
      </ul>
      <div className="filters">
        <div className="price-inputs">
          <label>
            Min Price:
            <input 
              type="number" 
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)} 
            />
          </label>
          <label>
            Max Price:
            <input 
              type="number" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
          </label>
        </div>
        <div className="product-name-input">
          <label>
            Product Name:
            <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
            />
          </label>
        </div>
      </div>
      {selectedCompany && <ProductList products={products} />}
    </div>
  );
};

export default CompanyList;




  