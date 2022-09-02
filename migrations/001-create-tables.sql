create TABLE car_make(
    id integer primary key AUTOINCREMENT,
    name text
);

create table car_model(
    id integer primary key AUTOINCREMENT,
    model_name text,
    price real,
    make_id integer,
    FOREIGN KEY (make_id) REFERENCES car_make(id)
);