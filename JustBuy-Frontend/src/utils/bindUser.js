import axios from "axios";
import Notify from "../components/Notify";
import { useAuthContext } from "../contexts/AuthProvider";
const url = import.meta.env.VITE_MAIN_URL;

export default async function bindUser(action, values) {
  action = action == "signup" ? "register" : "login";

  try {
    const { data } = await axios.post(`${url}/${action}`, values);
    Notify(data.status, "success");
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error.response.data.message);
    Notify(error.response.data.message, "error");
    return false;
  }
}
