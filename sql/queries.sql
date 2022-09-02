-- SQLite

SELECT * from car_make;

SELECT id, model_name, price, make_id
FROM car_model WHERE MAKE_ID = 4;

SELECT name, car_model.id, model_name, price, make_id
FROM car_model 
JOIN car_make 
    ON car_make.ID = car_model.make_id
WHERE MAKE_ID = 3;


SELECT name, round(avg(price),2) as total
FROM car_model 
JOIN car_make 
    ON car_make.ID = car_model.make_id
group by name
order by total asc limit 1;
