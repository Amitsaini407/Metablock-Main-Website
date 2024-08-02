import axios from "axios";
export const baseURL = "http://192.168.1.4:8000/api/v1";
if (!baseURL) {
  console.log(
    ">BaseURL error,please check your env file or visit api/ClientFunction.jsx file to see more details...,Thanks!..."
  );
}
const api = axios.create({
  baseURL: baseURL, // Add the protocol (http or https) before the hostname
});

const handleRequest = async (method, url, data = null) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return { success: false, err: error.message };
  }
};
export const fetchData = (url) => handleRequest("get", url);

export const postData = (url, data) => handleRequest("post", url, data);

export const updateData = (url, data) => handleRequest("put", url, data);

export const deleteData = (url, data) => handleRequest("delete", url, data);

export const requestData = (method, url, data) => {
  return handleRequest(method, url, data);
};
// normal function
export function formatDateString(isoDateString) {
  if (!isoDateString) {
    return "Not available";
  }

  const dateObject = new Date(isoDateString);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = dateObject.toLocaleString("en-US", options);
  return formattedDate;
}

export function formatTimestamp(timestamp) {
  if (timestamp) {
    return "Not available";
  }

  const date = new Date(parseInt(timestamp));

  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function formatStatusCode(statusCode) {
  switch (Number(statusCode)) {
    case 0:
      return "pending";
    case 1:
      return "approved";
    case 2:
      return "rejected";
    default:
      return "unknown"; // or handle the case when the status code is not 0, 1, or 2
  }
}
export function formatTime(dateString) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  const formattedTime = new Date(dateString).toLocaleTimeString([], options);

  return formattedTime;
}
