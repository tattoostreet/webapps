import express, { Router }  from "express";
import http from "https";
import { dirname } from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";
export async function handler(event, context) {
  const app = express();
  const router = Router();
  app.use("/api/", router);
  return serverless(app)(event, context);
}

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  // request, response
  res.sendFile(__dirname + "/index.html");
  // console.log(req);
});

app.post("/", (req, res) => {
  //console.log(req)
  let apiKey = "c3c8d98d7263e61529ca4bc53a70e044";
  let city = req.body.city;
  let unit = req.body.unit;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${unit}`;
  let unitName = "";
  switch (unit) {
    case "default":
      unitName = "Kelvin";
      break;
    case "metric":
      unitName = "Celcius";
      break;
    case "imperial":
      unitName = "Farenheit";
      break;
    default:
  }

  http.get(url, (response) => {
    //console.log(response.statusCode)
    response.on("data", (data) => {
      // console.log(data);
      let weatherData = JSON.parse(data);
      res.setHeader("Content-Type", "text/html");
      res.write(`<meta charset="UTF-8">`);
      res.write(`<meta http-equiv="X-UA-Compatible" content="IE=edge">`);
      res.write(
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      );
      res.write(`<title>Weather App</title>`);
      res.write(`<head><link rel="stylesheet" href="css/styles.css"></head>`);
      res.write(
        `<h1> The current temperature in <span>${weatherData.name}</span> is <span>${weatherData.main.temp}</span> degrees ${unitName}.</h1>`
      );
      res.write(
        `<p>Current weather: <span>${weatherData.weather[0].description}</span></p>`
      );
      res.write(
        `<button class="res-button" onclick="window.location.href='/';">Back</button>`
      );
      res.end();
      // console.log(JSON.stringify(weatherData));
    });
  });
});

app.listen(port || 3001, () => {
  console.log(`Example app listening on port ${port}`);
});
