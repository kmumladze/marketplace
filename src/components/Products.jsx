export default function Products({ products }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div className="flex flex-col items-start mx-4" key={product.id}>
          <img
            className="rounded-xl bg-stone-200"
            src={product.thumbnail}
            alt=""
          />
          <h1 className="font-bold">{product.title}</h1>
          <p>{product.brand}</p>
          <p className="font-bold">{product.price} $</p>
          <button className="bg-blue-500 p-3 rounded-2xl py-1 hover:text-stone-50 cursor-pointer">
            See Details
          </button>
        </div>
      ))}
    </div>
  );
}
