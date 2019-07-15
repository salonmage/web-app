import request from "../common/request";

const apiUrl = process.env.REACT_APP_API_URL;

/**
 *
 * @param {*} data {email, password}
 */
export function login(data) {
  return request({
    url: `${apiUrl}/auth/login`,
    method: "POST",
    data
  });
}

/**
 *
 * @param {*} data {access_token, refresh_token}
 */
export function refreshToken(data) {
  return request({
    url: `${apiUrl}/auth/refresh`,
    method: "POST",
    data
  });
}
