import { createContext, useState, useEffect, ReactNode } from "react";

const API_URL = "https://dummyjson.com/products";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

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
      const response = await fetch(API_URL);
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
