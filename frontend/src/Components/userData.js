import { func } from "prop-types";

const userData = {
  pincode: null,
  token: null,
  userId: null,
  role: null,
};

export function getCookieData() {
  if (!document.cookie) {
    document.cookie = JSON.stringify(userData);
  }
  let Data = document.cookie;
  Data = JSON.parse(Data);
  return Data;
}

export default userData;
