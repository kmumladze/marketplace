export default function Products({ products }) {
  return (
    <main className="bg-blue-200 flex justify-around h-screen">
      <div className="grid grid-cols-4 gap-8 p-5">
        {products.length === 0 && (
          <div className="m-auto">
            <p>No exact matches found</p>
            <p>Try searching for something else instead? </p>
          </div>
        )}
        {products.map((product) => (
          <div className="flex flex-col items-start  w-52" key={product.id}>
            <img
              className="rounded-xl bg-stone-200"
              src={product.thumbnail}
              alt=""
            />{" "}
            <div className="h-28">
              <h1 className="font-bold">{product.title}</h1>
              <p>{product.brand}</p>
              <p className="font-bold">{product.price} $</p>
            </div>
            <button className="bg-blue-500 p-3 rounded-2xl py-1 hover:text-stone-50 cursor-pointer">
              See Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
