import axios from "axios";
import { BASE_URL } from "../constants/todoConstants";

export const Data = async () => {
  let x = await axios.get(BASE_URL);
  console.log(x.data.data);
  const y = x?.data?.data;
  return y;
};
export const Add = async (message) => {
  const data = {
    task: message,
    active: "true",
  };
  let response = await axios.post(BASE_URL, data);
  return response;
};
export const del = async (id) => {
  let y = await axios.delete(`${BASE_URL}${id}`);
  console.log(y, "aaa");
  return y;
};
export const update = async (id, message2) => {
  const data = {
    task: message2,
    active: "true",
  };
  let y = await axios.put(`${BASE_URL}${id}`, data);
  return y;
};
