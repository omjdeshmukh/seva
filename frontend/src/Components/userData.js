import { func } from "prop-types";

const userData = {
  pincode: null,
  token: null,
  userId: null,
  role: null,
};

export function getCookieData() {
  // Check Wheather the is a data stored in a cookie
  if (!document.cookie) {
    document.cookie = JSON.stringify(userData);
  } else {
    let Data = document.cookie;
    Data = JSON.parse(Data);
    return Data;
  }
}

export function setCookieData(cookie) {
  let Data = JSON.stringify(cookie);
  document.cookie = Data;
}

export function clearCookie() {
  console.log(document.cookie);
  let cookieData = getCookieData();
  console.log(cookieData);
  cookieData.pincode = null;
  cookieData.token = null;
  cookieData.userId = null;
  cookieData.role = null;
  console.log(cookieData);
  setCookieData(cookieData);
  console.log(document.cookie);
}

export default userData;
