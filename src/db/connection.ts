import mysql from 'mysql2';
import { promisify } from 'util';

export const connection=mysql.createPool({
    host:'sql2.freesqldatabase.com',
    database:'sql2353682',
    user:'sql2353682',
    password:'lC3!sJ1!',
})

export const query=promisify(connection.query).bind(connection);