import request from "../common/request";

const apiUrl = process.env.REACT_APP_API;
const version = "1.0";
function getToken() {
  return "";
}

export function createBeautyService() {
  return request({
    url: `${apiUrl}/${version}/users`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}
