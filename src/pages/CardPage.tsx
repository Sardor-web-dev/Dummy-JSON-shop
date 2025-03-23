import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";

const ProductDetails = () => {
  const context = useContext(ProductContext);
  if (!context) return null;
  const { selectedProduct } = context;

  if (!selectedProduct) return <p className="p-4">Выберите товар для просмотра деталей.</p>;

  return (
    <div className="p-5 border-l">
      <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
      <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="w-64 h-64 object-cover my-4 rounded-lg" />
      <p>{selectedProduct.description}</p>
      <p className="text-lg font-semibold mt-2">${selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetails;
