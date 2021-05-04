export const bookListFetch = async (req) => {
  const response = await fetch(`http://openlibrary.org/search.json?q=${req}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
