import baseURL from "../Api/baseURL";
//to create dat without image
const useUpdateData = async (url, params) => {
  //if data ===string without image
  const res = await baseURL.put(url, params);
  return res;
};

//to create dat with image
const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" }
}
  //if data ===string without image
const res = await baseURL.put(url, params, config);
console.log(res.status)
return res;


};

export { useUpdateData, useUpdateDataWithImage };