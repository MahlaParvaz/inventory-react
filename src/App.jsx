import { useState } from 'react';
import './App.css';
import CategoryForm from './components/Category';
import NavBar from './components/NavBar';
import ProductsForm from './components/ProductsForm';
import ProductsList from './components/ProductsList';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <ProductsList
            products={products}
            setProducts={setProducts}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
