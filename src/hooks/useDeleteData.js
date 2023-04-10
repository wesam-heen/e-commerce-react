import baseURL from "../Api/baseURL";

//to get data from url
const useDeleteData = async (url, params) => {
  const res = await baseURL.delete(url, params);
  return res;
};

export default useDeleteData;
