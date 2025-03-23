import SearchBar from "@/components/custom/navbar";
import RefreshButton from "@/components/custom/refresh";
import ProductList from "@/pages/CardList";
import ProductDetails from "@/pages/CardPage";
import { Route, Routes, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/products/");

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Список товаров</h1>
      {!isDetailsPage && (
        <>
          <SearchBar />
          <RefreshButton />
        </>
      )}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default Layout;