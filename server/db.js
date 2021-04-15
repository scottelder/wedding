const { Slide } = require("@material-ui/core");
const { ConnectContactLens } = require("aws-sdk");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const selectAll = (cb) => {
  pool.connect((connectionError, client, release) => {
    if (connectionError) console.log(connectionError, "connectionError");
    client.query(`select * from rsvp`, (err, res) => {
      if (err) cb(err);
      if (res) cb(res);
      release();
    });
  });
};
// selectAll(console.log);
// selectAll(console.log);

const upsertRsvp = (data, cb) => {
  const {
    rsvp,
    individual1,
    individual2,
    isComfortable,
    currentVaccinationStatus,
    expectedVaccinationStatus,
    dietaryConsiderations,
    anythingElse,
  } = data;
  const text =
    "INSERT INTO rsvp (\
                                  attending,\
                                  individual1_first_name,\
                                  individual1_last_name,\
                                  individual2_first_name,\
                                  individual2_last_name,\
                                  is_comfortable,\
                                  current_vaccination,\
                                  expected_vaccination,\
                                  dietary_info,\
                                  additional_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
  const values = [
    rsvp,
    individual1.firstName,
    individual1.lastName,
    individual2.firstName,
    individual2.lastName,
    isComfortable,
    currentVaccinationStatus,
    expectedVaccinationStatus,
    dietaryConsiderations,
    anythingElse,
  ];
  pool.connect((connectionError, client, release) => {
    if (connectionError) console.log(connectionError, "connectionError");
    client.query(text, values, (err, res) => {
      if (err) cb(err, null);
      else cb(null, res);
      release();
    });
  });
};

module.exports = { selectAll, upsertRsvp };
