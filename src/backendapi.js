import Axios from "axios";
const host = {
  // Under construction
  localhost: "http://127.0.0.1:5000",
};
export default Axios.create({
  baseURL: host.localhost,
});
