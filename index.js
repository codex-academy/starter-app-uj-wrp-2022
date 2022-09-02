import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());

const  db = await  sqlite.open({
    filename:  './data.db',
    driver:  sqlite3.Database
});

await db.migrate();

const PORT = process.env.PORT || 6003;

app.get('/api/makes', async function(req, res) {
    const makes = await db.all(`select * from car_make`);
    res.json({
        makes
    });
});


app.listen(PORT, function(){
    console.log(`app started on ${PORT}`)
})


// find all the make of cars

// find out how many vollkswagen models there are

// insert a new toyota model - an Toyota Hilux that costs 275000

// update the price for a nissan x-trail to 140000

// find all the departments

// list the total total sales for each department

// find the department with the highest sales

// find the department with the lowes sales

