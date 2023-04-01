import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const axiosInstance = axios.create({
  baseURL,
});

export async function submitPost(data) {
  data.userId = 1;
  try {
    const response = await axiosInstance.post(`${baseURL}`, data);
  } catch (err) {
    console.log(err);
  }
}

export async function getPosts() {
  try {
    const response = await axiosInstance.get(`${baseURL}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getComments(id){
  try{
    const response = await axiosInstance.get(`${baseURL}/${id}/comments`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}