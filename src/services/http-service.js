import axios from "axios";
axios.interceptors.response.use(null, error => {
  const unexpected =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!unexpected) {
    console.log("Logging Error: ", error);
    alert("Unexpected error occured!");
  }
  return Promise.reject(error);
});
