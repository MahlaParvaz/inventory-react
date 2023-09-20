import { useEffect, useState } from 'react';
import './App.css';
import CategoryForm from './components/Category';
import NavBar from './components/NavBar';
import ProductsForm from './components/ProductsForm';
import ProductsList from './components/ProductsList';
import FilteredProducts from './components/FilteredProducts';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('latest');
  const [search, setSearch] = useState('');
  useEffect(() => {
    let result = products;
    result = filteredSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, search]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };
  const filteredSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(search));
  };
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === 'latest') {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === 'earliest') {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);
  useEffect(() => {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);
  useEffect(() => {
    if (categories.length) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <FilteredProducts
            sort={sort}
            search={search}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <ProductsList
            products={filteredProducts}
            setProducts={setProducts}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
