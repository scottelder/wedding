const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const axios = require("axios");

const getVaccineData = async () =>
  await axios.get(
    "https://heb-ecom-covid-vaccine.hebdigital-prd.com/vaccine_locations.json"
  );

app.use(express.static("./dist"));
app.use(express.static("./images"));

app.get("/vaccine-data", async (req, res) => {
  const vaccineData = await getVaccineData();
  res.send(vaccineData && vaccineData.data);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
