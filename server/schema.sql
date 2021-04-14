CREATE TYPE attending_type as ENUM('singlet', 'doublet', 'neither');
CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  attending attending_type NOT NULL,
  individual1_first_name VARCHAR NOT NULL,
  individual1_last_name VARCHAR NOT NULL,
  individual2_first_name VARCHAR NOT NULL,
  individual2_last_name VARCHAR NOT NULL,
  is_comfortable BOOLEAN,
  current_vaccination VARCHAR,
  expected_vaccination VARCHAR,
  dietary_info VARCHAR,
  additional_info VARCHAR
);