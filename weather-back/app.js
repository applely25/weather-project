const express = require("express");
const app = express();
const port = 8080;
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
let html = "";

async function getHtmlKMA() {
  try {
    return await axios.get(
      "https://weather.naver.com/today/07200125?cpName=KMA"
    ); // KMA // ACCUWEATHER // WEATHERNEWS
  } catch (error) {
    console.error(error);
  }
}
async function getHtmlACCUWEATHER() {
  try {
    return await axios.get(
      "https://weather.naver.com/today/07200125?cpName=ACCUWEATHER"
    ); // KMA // ACCUWEATHER // WEATHERNEWS
  } catch (error) {
    console.error(error);
  }
}
async function getHtmlWEATHERNEWS() {
  try {
    return await axios.get(
      "https://weather.naver.com/today/07200125?cpName=WEATHERNEWS"
    ); // KMA // ACCUWEATHER // WEATHERNEWS
  } catch (error) {
    console.error(error);
  }
}

async function getDataKMA() {
  html = await getHtmlKMA();

  const $ = cheerio.load(html.data);
  const toNumbers = (arr) => arr.map(Number);
  let data;
  $("div#weekly.card.card_week").each(async function (index, item) {
    var week = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_date span span"
      )
      .text()
      .split(".")
      .slice(0, -1);

    var lowtemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.lowest"
      )
      .text()
      .split("최저기온")
      .slice(1);

    var hightemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.highest"
      )
      .text()
      .split("최고기온")
      .slice(1);

    var rainfall = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_weather span strong span.rainfall"
      )
      .text()
      .split("강수확률")
      .slice(1);

    week = toNumbers(week);
    lowtemp = toNumbers(lowtemp.map((data) => data.slice(0, -1)));
    hightemp = toNumbers(hightemp.map((data) => data.slice(0, -1)));
    rainfall = toNumbers(rainfall.map((data) => data.slice(0, -1)));

    data = {
      week,
      lowtemp,
      hightemp,
      rainfall,
    };
  });

  return data;
}
async function getDataACCUWEATHER() {
  html = await getHtmlACCUWEATHER();

  const $ = cheerio.load(html.data);
  const toNumbers = (arr) => arr.map(Number);
  let data;
  $("div#weekly.card.card_week").each(async function (index, item) {
    var week = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_date span span"
      )
      .text()
      .split(".")
      .slice(0, -1);

    var lowtemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.lowest"
      )
      .text()
      .split("최저기온")
      .slice(1);

    var hightemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.highest"
      )
      .text()
      .split("최고기온")
      .slice(1);

    var rainfall = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_weather span strong span.rainfall"
      )
      .text()
      .split("강수확률")
      .slice(1);

    week = toNumbers(week);
    lowtemp = toNumbers(lowtemp.map((data) => data.slice(0, -1)));
    hightemp = toNumbers(hightemp.map((data) => data.slice(0, -1)));
    rainfall = toNumbers(rainfall.map((data) => data.slice(0, -1)));

    data = {
      week,
      lowtemp,
      hightemp,
      rainfall,
    };
  });

  return data;
}
async function getDataWEATHERNEWS() {
  html = await getHtmlWEATHERNEWS();

  const $ = cheerio.load(html.data);
  const toNumbers = (arr) => arr.map(Number);
  let data;
  $("div#weekly.card.card_week").each(async function (index, item) {
    var week = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_date span span"
      )
      .text()
      .split(".")
      .slice(0, -1);

    var lowtemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.lowest"
      )
      .text()
      .split("최저기온")
      .slice(1);

    var hightemp = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_temperature strong span.highest"
      )
      .text()
      .split("최고기온")
      .slice(1);

    var rainfall = $(item)
      .find(
        "div.scroll_control div.scroll_area ul li.week_item div.day_data div.cell_weather span strong span.rainfall"
      )
      .text()
      .split("강수확률")
      .slice(1);

    week = toNumbers(week);
    lowtemp = toNumbers(lowtemp.map((data) => data.slice(0, -1)));
    hightemp = toNumbers(hightemp.map((data) => data.slice(0, -1)));
    rainfall = toNumbers(rainfall.map((data) => data.slice(0, -1)));

    data = {
      week,
      lowtemp,
      hightemp,
      rainfall,
    };
  });

  return data;
}

app.get("/data", async (req, res) => {
  try {
    const crowldata1 = await getDataKMA();
    const crowldata2 = await getDataACCUWEATHER();
    const crowldata3 = await getDataWEATHERNEWS();

    const allData = {
      week: [],
      lowtemp: [],
      hightemp: [],
      rainfall: [],
    };
    for (let i = 0; i <= 9; i++) {
      allData.week.push({
        month: crowldata1.week[i * 2],
        day: crowldata1.week[i * 2 + 1],
      });
      allData.lowtemp.push(
        (
          (crowldata1.lowtemp[i] +
            crowldata2.lowtemp[i] +
            crowldata3.lowtemp[i]) /
          3
        ).toFixed(1)
      );
      allData.hightemp.push(
        (
          (crowldata1.hightemp[i] +
            crowldata2.hightemp[i] +
            crowldata3.hightemp[i]) /
          3
        ).toFixed(1)
      );
      allData.rainfall.push({
        sun: (
          (crowldata1.rainfall[i * 2] +
            crowldata2.rainfall[i * 2] +
            crowldata3.rainfall[i * 2]) /
          3
        ).toFixed(1),
        moon: (
          (crowldata1.rainfall[i * 2 + 1] +
            crowldata2.rainfall[i * 2 + 1] +
            crowldata3.rainfall[i * 2 + 1]) /
          3
        ).toFixed(1),
      });
    }
    console.log(allData.week);
    console.log(allData.lowtemp);
    console.log(allData.hightemp);
    console.log(allData.rainfall);

    res.status(200).json(
      allData);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
