import { instance } from "./config";

const searchGlobally = async (word: string | null) => {
  const response = await instance.get(`/tools?q=${word}`);
  return response;
};

export default searchGlobally;
