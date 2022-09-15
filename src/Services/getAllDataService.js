export const getAllDataService = async (url, page) => {
  try {
    const res = page ? await fetch(`${url}${page}`) : await fetch(`${url}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
