import { get } from "lodash";

export function getValueOfAttribute(attributes, key) {
  try {
    return attributes.find(attribute => attribute.key === key);
  } catch (error) {
    //
  }
}

export const getToken = () => {
  return get(
    JSON.parse(localStorage.getItem("state")),
    "userLogin.access_token",
    ""
  );
};

export function parseJwt(token) {
  try {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return "";
  }
}
