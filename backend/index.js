const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const companies = [
  {
    name: "AMZ",
    products: [
      { productname: "Laptop 1", price: 2236, rating: 4.5, availability:"yes", discount: 63},
      {productname: "Laptop 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname:  "Laptop 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Laptop 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname: "Phone 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname: "Phone 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      
      { productname:  "Phone 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Phone 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
    ],
  },
  {
    name: "FLP",
    products: [
      { productname: "Laptop 5", price: 2238, rating: 4.5, availability:"yes", discount: 63 },
      {productname: "Laptop 6", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname:  "Laptop 7", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Laptop 8", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname: "Phone 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname: "Phone 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      
      { productname:  "Phone 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Phone 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
    ],
  },
  {
    name: "SNP",
    products: [
      { productname: "Laptop 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      {productname: "Laptop 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname:  "Laptop 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Laptop 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname: "Phone 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname: "Phone 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      
      { productname:  "Phone 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Phone 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
    ],
  },
  {
    name: "MYN",
    products: [
      { productname: "Laptop 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      {productname: "Laptop 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname:  "Laptop 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Laptop 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname: "Phone 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname: "Phone 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      
      { productname:  "Phone 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Phone 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
    ],
  },
  {
    name: "AZO",
    products: [
      { productname: "Laptop 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      {productname: "Laptop 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname:  "Laptop 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Laptop 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname: "Phone 1", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      { productname: "Phone 2", price: 2236, rating: 4.5, availability:"yes", discount: 63 },
      
      { productname:  "Phone 3", price: 2136, rating: 4.5, availability:"no", discount: 23 },
      { productname:  "Phone 4", price: 2136, rating: 4.5, availability:"no", discount: 23 },
    ],
  },
  
];



app.get('/products', (req, res) => {
    const companyName = req.query.company;
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);
    const productName = req.query.productname ? req.query.productname.toLowerCase() : '';
    const company = companies.find(c => c.name.toLowerCase() === c.name.toLowerCase());
  
    if (company) {
      const filteredProducts = company.products.filter(product => 
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.productname.toLowerCase().includes(productName)
      );
      res.json(filteredProducts);
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });