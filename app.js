const apikey = "CWB-6A211101-534C-445A-BB3A-5D7B61E126A4";
const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apikey}&format=JSON`;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    //全部資料
    console.log(response);
    //location
    const dataLocation = response.records.location;
    const dataWeatherElement = response.records.WeatherElement;
    console.log(dataLocation);
    //獲取資料
    let location = [];
    let weatherElement = [];
    let Wx = [];
    dataLocation.forEach((ele) => {
      location.push(ele.locationName);
      weatherElement.push(ele.weatherElement);
    });
    console.log(location);
    console.log(weatherElement);
  })
  .catch((err) => {
    console.log(err);
  });
