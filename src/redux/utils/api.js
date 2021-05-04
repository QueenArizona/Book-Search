export const bookListFetch = async (req) => {
  const response = await fetch(
    `${process.env.REACT_APP_SEARCH_URL}/search.json?q=${req}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
