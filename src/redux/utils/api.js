export const booksListFetch = async (req) => {
  const response = await fetch(
    `${process.env.REACT_APP_SEARCH_URL}/search.json?q=${req}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  console.log(data.docs.filter(el => el.publisher))
  return data;
};
