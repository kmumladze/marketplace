import { Link } from "react-router";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <main className="bg-gray-200 flex justify-around min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-5">
        {products.length === 0 && (
          <div className="flex flex-col justify-center items-center">
            <p>No exact matches found</p>
            <p>Try searching for something else instead? </p>
          </div>
        )}
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
