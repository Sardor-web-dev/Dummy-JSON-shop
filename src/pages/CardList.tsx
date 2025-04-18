import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const context = useContext(ProductContext);
  const navigate = useNavigate();

  if (!context) return null;
  const { products } = context;

  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-lg font-bold mt-2">{product.title}</h3>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
