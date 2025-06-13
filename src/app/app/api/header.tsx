import moment from "moment";
import config from "../../../../config";

export function header() {
  const { API_SECRET, API_KEY } = config;

  const CryptoJS = require("crypto-js");
  var timestamp = moment().unix().toString();
  var plainText = API_KEY + API_SECRET + timestamp;
  var sha256Hash = CryptoJS.SHA256(plainText);
  var base64 = CryptoJS.enc.Base64.stringify(sha256Hash);

  var custParam =
    "7dd401feeecae9a47482600a8ab044df-2f179e20813efe76f2ec586d23e3d4c01964dbb6bd79cada4f45796ed08eabbf3ab5a797b0b38fc1ab66b90285efef4ecaaf6765ba1246da654d6d746e5cc002e2924e0b24102ca9322673997c0a623b1c1821795548689d376ead1264c517fe147f4a7395d6b963abf985a5024443e7e3791d50dd316c772b40193faea9cb3ededc63e5d056b8b00c7bfa686146a2ffeb323442884d6d4b683949b957069b567e3c8b5b5523da9c07c5e346554b8d514a6602fe2e3da29efeec2b4218ee2d0b";

  return {
    // "X-API-KEY": API_KEY,
    "X-TIMESTAMP": timestamp,
    "X-SIGNATURE": base64,
    "X-CUST-PARAM": custParam,
  };
}
