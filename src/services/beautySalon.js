import request from "../common/request";
import { getToken } from "../common/utils";

const apiUrl = process.env.REACT_APP_API_URL;
const version = process.env.REACT_APP_API_VERSION;

/**
 *
 * @param {*} beautyOrderId
 * @param {*} data {user_id, type, name, services:[{service_id}]}
 */
export function updateBeautyOrder(beautyOrderId, data) {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/orders/${beautyOrderId}`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 *
 * @param {*} data {user_id, type, name, services:[{service_id}]}
 */
export function createBeautyOrder(data) {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/orders`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    }
  });
}

export function getListComboBeautyService() {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/combo-services`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}

/**
 *
 * @param {*} data {name, services: [{service_id, number}]}
 */
export function createComboBeautyService(data) {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/combo-services`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 *
 * @param {*} beautyServiceId
 * @param {*} data {name, retail_price}
 */
export function updateBeautyService(beautyServiceId, data) {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/services/${beautyServiceId}`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

/**
 *
 * @param {*} data {name, retail_price}
 */
export function createBeautyService(data) {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/services`,
    method: "POST",
    headers: {
      "x-access-token": getToken()
    },
    data
  });
}

export function getListBeautyService() {
  return request({
    url: `${apiUrl}/${version}/beauty-salon/services`,
    method: "GET",
    headers: {
      "x-access-token": getToken()
    }
  });
}
