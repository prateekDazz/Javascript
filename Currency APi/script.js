const url = "https://cat-fact.herokuapp.com/facts";

// const getData = async () => {
//   console.log("Fetching data...");
//   const response = await fetch(url);
//   console.log(response);
//   console.log("Data fetched!");
//   // console.log(response); json format
//   const data = await response.json();
//   // console.log(data[0])
//   console.log(data[0].text)
//   document.getElementById("cat-fact").innerHTML = data[0].text;
//   // console.log(data);
//   document.getElementById("btn").disabled = true;

//   setTimeout(() => {
//     document.getElementById("btn").disabled = false;
//     document.getElementById("cat-fact").innerHTML = '';
//   }, 3000);
// }
// document.getElementById("btn").addEventListener("click", getData);


// const postData = async (url, postData) => {
//   console.log("fetching data");
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   });

//   console.log("data fetched successfully");
//   console.log(response);
//   console.log("fetching json data");

//   const data = await response.json();
//   console.log("json data fetched successfully");
//   console.log(data);
// }
// let data = {
//   "name": "morpheus",
//   "job": "leader"
// }
// postData("https://reqres.in/api/users", data);
// currency vs country
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

// console.log(countryList);
// console.log(countryList["ZWD"]);
// logic to fetch option option value
// console.log(from);
// console.log(to);

var to = document.getElementById("to");
var from = document.getElementById("from");
console.log("from's value at begin" + from);
console.log("to's value at begin" + to);
// logic for changing image as per curency change
from.addEventListener("change", () => {
  var fromImg = document.getElementById("fromImg");
  fromImg.src = `https://flagsapi.com/${countryList[from.value]}/flat/64.png`
  // console.log(fromClass);
});

to.addEventListener("change", () => {
  var toImg = document.getElementById("toImg");
  toImg.src = `https://flagsapi.com/${countryList[to.value]}/flat/64.png`
  // console.log(fromClass);

});
for (let curr in countryList) {
  let x = document.createElement('option');

  x.text = curr;
  if (curr == 'USD') {
    x.selected = true;
  }
  let y = document.createElement('option');
  if (curr == 'INR') {
    y.selected = true;
  }
  y.text = curr;
  from.appendChild(x);
  to.appendChild(y);
  // console.log("value of curr is" + curr);
  // console.log("value of countryList[curr] is" + countryList[curr]);
}


// logic to change the exchange value displayed on the screen


const exc = document.getElementById("exc");
const btn = document.getElementById("btn");
// https://v6.exchangerate-api.com/v6/6b5d91d03fe8566de7fa6285/pair/USD/INR

let convertCurr = async (from, to, amount) => {
  console.log("from ki value hai " + from);
  console.log("to ki value hai" + to);
  console.log("amount =" + amount);
  let response = await fetch(`https://v6.exchangerate-api.com/v6/6b5d91d03fe8566de7fa6285/pair/${from}/${to}`);
  let data = await response.json();
  console.log(data)
  let convertedAmount = data.conversion_rate * amount;
  console.log("the converted amount is " + convertedAmount)
  exc.innerHTML = `1 ${from} = ${data.conversion_rate} ${to}, hence the converted amount is ${convertedAmount} ${to}`;
  return convertedAmount;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("the button is clicked");
  var amount = parseInt(document.getElementById("amt").value);

  console.log(" the from currency is " + from.value);
  console.log(" the to currency is " + to.value);
  console.log(" the amount is " + amount);
  let x = convertCurr(from.value, to.value, amount);
})

