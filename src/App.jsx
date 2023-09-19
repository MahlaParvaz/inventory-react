import { useState } from 'react';
import './App.css';
import CategoryForm from './components/Category';
import NavBar from './components/NavBar';
import ProductsForm from './components/ProductsForm';

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
