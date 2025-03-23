import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";

const RefreshButton = () => {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { refreshProducts } = context;

  return (
    <button
      onClick={refreshProducts}
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Обновить товары
    </button>
  );
};

export default RefreshButton;
