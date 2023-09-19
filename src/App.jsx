import './App.css';
import CategoryForm from './components/Category';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm />
        </div>
      </div>
    </div>
  );
}

export default App;
