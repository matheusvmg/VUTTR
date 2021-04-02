import { instance } from "./config";

const getTools = async () => {
  const response = await instance.get("/tools");
  return response;
};

export default getTools;
