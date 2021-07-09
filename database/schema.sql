DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS address CASCADE;
DROP TABLE IF EXISTS sessions CASCADE;
DROP TABLE IF EXISTS bids CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS homes;

CREATE TABLE homes (
  id SERIAL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  sqft INTEGER,
  start_time DATE,
  end_time DATE,
  base_price INTEGER,
  current_bid INTEGER,
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

-- CREATE TABLE bid_table (
--   id SERIAL,
--   home_id INTEGER,
--   start_time DATE,
--   end_time DATE,
--   base_price INTEGER,
--   current_bid INTEGER,
--   PRIMARY KEY(id),
--     CONSTRAINT fk_homes
--       FOREIGN KEY (home_id)
--         REFERENCES homes(id)
--         ON UPDATE CASCADE
-- );

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(40) UNIQUE,
  password VARCHAR(64),
  salt VARCHAR(64),
  token VARCHAR(64),
  PRIMARY KEY(id)
);

CREATE TABLE bids (
  id SERIAL,
  home_id INTEGER,
  max_bid INTEGER,
  user_id INTEGER UNIQUE,
  PRIMARY KEY(id),
    CONSTRAINT fk_homes
      FOREIGN KEY (home_id)
        REFERENCES homes(id)
        ON UPDATE CASCADE,
    CONSTRAINT fk_user
      FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON UPDATE CASCADE
);

CREATE TABLE sessions (
  id SERIAL,
  hash VARCHAR(64),
  user_id INT,
  PRIMARY KEY(id),
    CONSTRAINT fk_user
      FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON UPDATE CASCADE
);


INSERT INTO homes VALUES (
  default, 5, 6.5, 10500, date '2021-07-11', date '2021-07-30', 500000, 500000
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

INSERT INTO users VALUES
  (default, 'jeremysylee', 'potato', '3fadf23rn2r', 'aefjisjdfa'),
  (default, 'jimmyg', 'lemon', 'fsf34s3fsdf', 'sef32oif3'),
  (default, 'ag0sto', 'jello', 'as34fasdf', 'af399f0jf'),
  (default, 'migbuen', 'codgod', 'asf34as3f', 'seiaf32342'),
  (default, 'potato', 'womobo', 'asf3;fj3f', 'safe3f3s');

INSERT INTO bids VALUES
  -- (default, 1, 4500000, 5),
  -- (default, 1, 4600000, 2),
  (default, 1, 600000, 3),
  (default, 1, 500000, 4);