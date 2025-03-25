import { Product } from "@/types";
import { createContext, useState, useEffect, ReactNode } from "react";

interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  refreshProducts: () => void;
}


export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_PUBLIC_API + "/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct, refreshProducts: fetchProducts }}>
      {loading ? <p>Loading...</p> : children}
    </ProductContext.Provider>
  );
};
