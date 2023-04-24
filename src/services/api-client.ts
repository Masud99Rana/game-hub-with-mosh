import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eb842424db6c427783cbc3578d2b42c3",
  },
});
