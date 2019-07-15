import request from "../common/request";

const apiUrl = process.env.REACT_APP_API;
const version = "1.0";
function getToken() {
  return "";
}

/**
 * 
 * @param {*} locationId 
 */
export function deleteLocation(locationId) {
  return request({
    url: `${apiUrl}/${version}/locations/${locationId}`,
    method: "DELETE",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * @param {*} locationId
 * @param {*} data {name, phone, address, city, country}
 */
export function updateLocation(locationId, data) {
  return request({
    url: `${apiUrl}/${version}/locations/${locationId}`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 *
 * Create location
 * @param {*} data {name}
 */
export function createLocation(data) {
  return request({
    url: `${apiUrl}/${version}/locations`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 * Get list location
 */
export function getAllLocation() {
  return request({
    url: `${apiUrl}/${version}/locations`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * Get staff info
 * @param {*} staffId
 */
export function getStaff(staffId) {
  return request({
    url: `${apiUrl}/${version}/staff/${staffId}`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 * Get list staff of user
 */
export function getAllStaff() {
  return request({
    url: `${apiUrl}/${version}/staff`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 * Get info user
 */
export function getMyInfo() {
  return request({
    url: `${apiUrl}/me`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * @param {*} data {fullname, email, password, phone,name}
 */
export function createAccount(data) {
  return request({
    url: `${apiUrl}/${version}/accounts`,
    method: "POST",
    data,
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * @param {*} accountId
 * @param {*} data {name, email, phone}
 */
export function updateAccount(accountId, data) {
  return request({
    url: `${apiUrl}/${version}/accounts/${accountId}`,
    method: "POST",
    data,
    headers: {
      "x-access-token": getToken()
    }
  });
}
