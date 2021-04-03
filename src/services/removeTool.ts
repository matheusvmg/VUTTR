import { instance } from "./config";

const removeTool = async (id: number) => {
  const response = await instance.delete(`/tools/${id}`);
  return response;
};

export default removeTool;
