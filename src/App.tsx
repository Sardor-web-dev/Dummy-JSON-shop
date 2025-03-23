import SearchBar from "./components/custom/navbar";
import RefreshButton from "./components/custom/refresh";
import { ProductProvider } from "./contexts/ProductContext";
import ProductList from "./pages/CardList";
import ProductDetails from "./pages/CardPage";

function App() {
  return (
    <ProductProvider>
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-4">Список товаров</h1>
        <SearchBar/>
        <RefreshButton />
        <div className="flex">
          <ProductList />
          <ProductDetails />
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
