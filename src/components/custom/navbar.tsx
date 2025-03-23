import { ProductContext } from "@/contexts/ProductContext";
import { useContext, useState } from "react";

const SearchBar = () => {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { products, setSelectedProduct } = context;
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded cursor-pointer" onClick={() => setSelectedProduct(product)}>
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
