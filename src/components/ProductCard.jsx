import heartLogo from "../assets/heart.svg";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-start w-52 cursor-pointer dark:border-4 border-gray-800 rounded-lg overflow-hidden p-1">
      <img
        className="rounded-xl bg-opacity-25 dark:bg-opacity-25"
        src={product.thumbnail}
        alt=""
      />{" "}
      <div className="h-28">
        <h1 className="font-bold">{product.title}</h1>
        <p>{product.brand}</p>
        <p className="font-bold">{product.price} $</p>
      </div>
      <div className="flex gap-4 justify-around">
        <button className="bg-blue-500 p-3 rounded-2xl py-1 hover:text-stone-50 cursor-pointer">
          Add to Cart
        </button>
        <button className="flex items-center">
          <img src={heartLogo} alt="heart logo" />
          <h3>Save</h3>
        </button>
      </div>
    </div>
  );
}
