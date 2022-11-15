let data;
axios
  .get("http://localhost:8080/data")
  .then((Response) => {
    data = Response.data;
    console.log(Response.data);
  })
  .catch((Error) => {
    console.log(Error);
  });

const dataP = document.getElementById("data");
const get = document.getElementById("get");
let week, lowtemp, hightemp, rainfall;
get.addEventListener("click", () => {
  week = data.crowldata1.week.map((e) => e.toFixed());
  lowtemp = [];
  hightemp = [];
  rainfall = [];
  for (let i = 0; i < 10; i++) {
    lowtemp.push(
      (
        (data.crowldata1.lowtemp[i] +
          data.crowldata2.lowtemp[i] +
          data.crowldata3.lowtemp[i]) /
        3
      ).toFixed(2)
    );
    hightemp.push(
      (
        (data.crowldata1.hightemp[i] +
          data.crowldata2.hightemp[i] +
          data.crowldata3.hightemp[i]) /
        3
      ).toFixed(2)
    );
  }
  for (let i = 0; i < 20; i++) {
    rainfall.push(
      (
        (data.crowldata1.rainfall[i] +
          data.crowldata2.rainfall[i] +
          data.crowldata3.rainfall[i]) /
        3
      ).toFixed(2)
    );
  }
  console.log(week);
  console.log(lowtemp);
  console.log(hightemp);
  console.log(rainfall);
});
