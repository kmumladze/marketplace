export const LIMIT = 8;

export const EMPTY_PRODUCTS = {
  products: [],
  total: 0,
  skip: 0,
  limit: LIMIT,
};

export async function fetchProducts({ page, search, sort }) {
  const currentSkip = (page - 1) * LIMIT;

  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}&limit=${LIMIT}&skip=${currentSkip}${
        sort !== null ? `&sortBy=price&order=${sort}` : ""
      }`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return EMPTY_PRODUCTS;
  }
}
