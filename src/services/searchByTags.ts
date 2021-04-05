import { instance } from "./config";

const searchByTags = async (tag: string | null) => {
  const response = await instance.get(`/tools?tags_like=${tag}`);
  return response;
};

export default searchByTags;
