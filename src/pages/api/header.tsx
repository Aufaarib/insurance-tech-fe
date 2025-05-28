import moment from "moment";

export function header() {
  const CryptoJS = require("crypto-js");
  var timestamp = moment().unix().toString();
  var plainText = `${process.env.API_KEY}` + process.env.API_SECRET + timestamp;
  var sha256Hash = CryptoJS.SHA256(plainText);
  var base64 = CryptoJS.enc.Base64.stringify(sha256Hash);

  console.log("tmpstmp", timestamp);
  console.log("hashed", base64);

  // pm.request.headers.add("X-timestamp: " + timestamp);
  // pm.request.headers.add("X-signature: " + base64);
}
