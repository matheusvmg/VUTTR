import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://vuttr-matheusvmg.herokuapp.com/",
});

export { instance };
