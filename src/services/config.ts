import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://vuttr-matheusvmg.herokuapp.com" || "http://localhost:3000",
});

export { instance };
