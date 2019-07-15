import request from "../common/request";
import { getToken } from '../common/utils'

const apiUrl = process.env.REACT_APP_API;
const version = process.env.REACT_APP_API_VERSION

export function getListUser() {
  return request({
    url: `${apiUrl}/${version}/users`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 * 
 * @param {*} userId 
 */
export function userInfo(userId) {
  return request({
    url: `${apiUrl}/${version}/users/${userId}`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * @param {*} userId
 * @param {*} data {attributes: [{key, text},...]}
 */
export function updateUser(userId, data) {
  return request({
    url: `${apiUrl}/${version}/users/${userId}`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 *
 * @param {*} data {attributes: [{key, text},...]}
 */
export function createUser(data) {
  return request({
    url: `${apiUrl}/${version}/users`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 * List Attribute Definitions
 */
export function getListAttributeDefinitions() {
  return request({
    url: `${apiUrl}/${version}/locations/user-attributes`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}
