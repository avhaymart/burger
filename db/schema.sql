use heroku_40abc4b1b3910e3;
CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name varchar(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)