const apikey = "CWB-6A211101-534C-445A-BB3A-5D7B61E126A4";
const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apikey}&format=JSON`;
fetch(url)
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
