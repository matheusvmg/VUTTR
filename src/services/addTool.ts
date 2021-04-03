import { instance } from "./config";

const addTool = async (data: object) => {
  const response = await instance.post("/tools", data);
  return response;
};

export default addTool;
