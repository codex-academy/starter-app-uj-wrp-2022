import assert from 'assert';

import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await  sqlite.open({
    filename:  './data-test.db',
    driver:  sqlite3.Database
});

await db.migrate();

describe("The js code", 
    it("show be able to call the database", async function() {

        const makeCount = await db.get(`select count(*) as count from car_make`)

        assert.equal(1, makeCount.count);

    })
);