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
  url VARCHAR(2080),
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


INSERT INTO homes VALUES (
  default, 5, 6.5, 10500
);

INSERT INTO photos VALUES
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m775420761od-w1024_h768.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m1064968563od-w1024_h768.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m1982136094od-w1024_h768.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m3484966329od-w1024_h768.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m3769594722od-w1024_h768_x2.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m4198031482od-w1024_h768.webp', 1),
  (default, 'https://homestead1444.s3.us-west-1.amazonaws.com/b07ce28d16e9eb704aa4b322451be258l-m450549533od-w1024_h768.webp', 1);

INSERT INTO address VALUES
  (default, '31842 W Sea Level Dr', null, 'Malibu', 'CA', 90265, 1);

INSERT INTO bid_table VALUES
  (default, 1, date '2021-07-11', date '2021-07-30', 4250000, 1100000);

INSERT INTO bids VALUES
  (default, 1, 4500000, 1),
  (default, 1, 4600000, 1),
  (default, 1, 5000000, 1),
  (default, 1, 5750000, 1);