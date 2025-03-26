import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "@/types";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
         await axios
          .get(`https://dummyjson.com/products/${id}`)
          .then((res) => setProduct(res.data));
      } catch (error) {
        console.error("Ошибка загрузки товара:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (!product) return <p className="text-center p-4">Товар не найден.</p>;

  return (
    <div className="p-5">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 underline">Назад</button>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover my-4 rounded-lg" />
      <p>{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
