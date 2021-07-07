DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS address CASCADE;
DROP TABLE IF EXISTS bids CASCADE;
DROP TABLE IF EXISTS bidder CASCADE;
DROP TABLE IF EXISTS bid_table CASCADE;
DROP TABLE IF EXISTS homes;

CREATE TABLE homes (
  id SERIAL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  sqft INTEGER,
  PRIMARY KEY(id)
);

CREATE TABLE photos (
  id SERIAL,
  url VARCHAR(350),
  home_id INTEGER,
  PRIMARY KEY(id),
  CONSTRAINT fk_homes
    FOREIGN KEY(home_id)
      REFERENCES homes(id)
      ON UPDATE CASCADE
);

CREATE TABLE address (
  id SERIAL,
  street VARCHAR(200),
  unit VARCHAR(20),
  city VARCHAR(100),
  state VARCHAR(2),
  zip INTEGER,
  home_id INTEGER,
  PRIMARY KEY(id),
    CONSTRAINT fk_homes
      FOREIGN KEY (home_id)
        REFERENCES homes(id)
        ON UPDATE CASCADE
);

CREATE TABLE bid_table (
  id SERIAL,
  home_id INTEGER,
  start_time DATE,
  end_time DATE,
  base_price INTEGER,
  current_bid INTEGER,
  PRIMARY KEY(id),
    CONSTRAINT fk_homes
      FOREIGN KEY (home_id)
        REFERENCES homes(id)
        ON UPDATE CASCADE
);

CREATE TABLE bids (
  id SERIAL,
  bid_table_id INTEGER,
  max_bid INTEGER,
  bidder_id INTEGER,
  PRIMARY KEY(id),
    CONSTRAINT fk_bid_table
      FOREIGN KEY (bid_table_id)
        REFERENCES bid_table(id)
        ON UPDATE CASCADE
);

CREATE TABLE bidder (
  id SERIAL,
  name VARCHAR(20),
  PRIMARY KEY(id)
);
