import Express from "express";
import { eachHourOfInterval } from "date-fns";
import {
  parseTAFAsForecast,
  getCompositeForecastForDate,
  parseMetar,
} from "metar-taf-parser";
import { getTAF } from "./utils/latest.js";

const app = new Express();

app.get("/taf/:icao?", async (req, res) => {
  const icao = req.params.icao.toUpperCase();
  const getTaf = await getTAF(icao, "taf");
  const rawTAFString = getTaf[icao][0].data_text;
  const issued = new Date();
  const report = parseTAFAsForecast(rawTAFString, { issued });

  const forecastPerHour = eachHourOfInterval({
    start: report.start,
    end: report.end,
  })
    .map((hour) => {
      const currentTime = issued; // Waktu saat ini
      if (hour.getTime() > currentTime.getTime()) {
        return {
          hour,
          ...getCompositeForecastForDate(hour, report),
        };
      }
      return null; // Jika jam lebih besar atau sama dengan waktu saat ini, lewati
    })
    .filter((result) => result !== null);

  const reportFilter = {
    station: report.station,
    issued: report.issued,
    day: report.day,
    hour: report.hour,
    message: report.message,
    start: report.start,
    end: report.end,
  };

  res.send({ report: reportFilter, forecast: forecastPerHour });
});

app.get("/metar/:icao?", async (req, res) => {
  const icao = req.params.icao.toUpperCase();
  const getMetar = await getTAF(icao, "metar-speci");
  const rawMETARString = getMetar[icao][0].data_text;
  const issued = new Date();

  const metar = parseMetar(rawMETARString);

  res.send({ metar });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
