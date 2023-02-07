const apikey = "CWB-6A211101-534C-445A-BB3A-5D7B61E126A4";
const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apikey}&format=JSON`;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    //全部資料
    console.log("全部資料");
    console.log(response);
    //location
    const dataLocation = response.records.location;
    const dataWeatherElement = response.records.WeatherElement;
    console.log("location");
    console.log(dataLocation);
    //獲取資料
    let location = [];
    let weatherElement = [];
    let Wx = [];
    dataLocation.forEach((ele) => {
      location.push(ele.locationName);
      weatherElement.push(ele.weatherElement);
    });
    console.log("location name");
    console.log(location);
    console.log("氣象資料(很多種喔)");
    console.log(weatherElement);

    const nameLength = location.length;

    for (let i = 0; i < nameLength; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", location[i]);
      div.innerHTML = `<h2>${location[i]}</h2> <br />
      天氣：<br />
      ${weatherElement[i][0].time[0].parameter.parameterName}`;
      // const localName = document.createElement("h3");
      // localName.textContent = location[i];
      // document.querySelector("div").appendChild(localName);
      document.querySelector("section").appendChild(div);
    }
  })
  .catch((err) => {
    console.log(err);
  });
