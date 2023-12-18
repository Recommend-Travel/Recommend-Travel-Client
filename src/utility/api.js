import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/recommend-travel",
  withCredentials: false,
});

export async function login(loginData) {
  return await api.post("/login", loginData);
}

export async function logout() {
  return await api.post("/logout");
}

export async function register(registerData) {
  return await api.post("/register", registerData);
}

export async function mbtiTest(testResult) {
  return await api.post("/mbti-test", testResult);
}

export async function getMBTIDestination(mbti) {
  return await api.get(`/recommend-destinations?mbti=${mbti}`);
}

export async function createPost(postData) {
  return await api.post("/create-post", postData);
}

export async function getPost() {
  return await api.get("/posts");
}

export async function getPostDetail(postId) {
  return await api.get(`/getpostinfo?postid=${postId}`);
}

export async function createComment(commentData) {
  return await api.post("/add-comment", commentData);
}

export async function deleteUser(userid) {
  return await api.post(`/delete/${userid}`);
}
