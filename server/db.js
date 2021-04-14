const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect().catch(console.error);

const selectAll = (cb) => {
  client.query(`select * from rsvp`, (err, res) => {
    if (err) cb(err);
    if (res) cb(res);
    client.end();
  });
};
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
  client.query(text, values, (err, res) => {
    if (err) cb(err, null);
    else cb(null, res);
    client.end();
  });
};

module.exports = { selectAll, upsertRsvp };
