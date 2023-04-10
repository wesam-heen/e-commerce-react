import baseURL from "../Api/baseURL";

//to get data from url
const useGetData = async (url, params) => {
  const res = await baseURL.get(url, params);
  return res;
};

export default useGetData;
