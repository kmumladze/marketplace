import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductsDetails() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchProductsDetails();
  }, [productId]);

  if (product === null) {
    return <div>loading...</div>;
  }

  return <ProductCard product={product} />;
}
