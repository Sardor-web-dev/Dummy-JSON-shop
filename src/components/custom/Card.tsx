import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const CardProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then((res) => setProducts(res)
  //   )
  // }, [])

  useEffect(() => {
    axios.get(import.meta.env.VITE_PUBLIC_API + '/products').then((res) => {
      console.log(res.data);
      setProducts(res.data.products);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 w-full bg-gray-600 gap-4 p-5">
      {
        products.length > 0 ? 
        products.map((product) => (
          <Card className="bg-gray-300" key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
            </CardContent>
            <CardFooter>
              <p className="text-lg font-semibold">${product.price}</p>
            </CardFooter>
          </Card>
        )) : <p>Loading...</p>
      }
    </div>
  )
};

export default CardProduct;
