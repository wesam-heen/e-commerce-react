import baseURL from "../Api/baseURL";
//to create dat without image
const useInsertData = async (url, params) => {
  //if data ===string without image
  const res = await baseURL.post(url, params);
  return res;
};

//to create dat with image
const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  //if data ===string without image
  const res = await baseURL.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataWithImage };
