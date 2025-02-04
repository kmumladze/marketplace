export default function Products({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.thumbnail} alt="" />
        </li>
      ))}
    </ul>
  );
}
