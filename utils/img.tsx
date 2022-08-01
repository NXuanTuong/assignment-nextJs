import axios from "axios";

export const uploadFile = async (fileName: string) => {
  const formData = new FormData();
  formData.append("file", fileName);
  formData.append("upload_preset", "gxpasiys");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/assjavascript/image/upload",
    formData
  );
  return data.url;
};
