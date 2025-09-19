const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

(async () => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS data (id SERIAL PRIMARY KEY, name VARCHAR(255), value VARCHAR(255));');
    console.log("Database table 'data' checked/created successfully.");
  } catch (err) {
    console.error('Error creating database table', err);
  }
})();

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).send(`Database connection successful. Current time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('Database connection failed:', err.message);
    res.status(500).send(`Database connection failed: ${err.message}`);
  }
});

app.get('/add-data', async (req, res) => {
  const { name, value } = req.query;
  if (!name || !value) {
    return res.status(400).send('Please provide both a "name" and "value" in the query parameters.');
  }

  try {
    await pool.query('INSERT INTO data (name, value) VALUES ($1, $2)', [name, value]);
    res.status(200).send(`Data added successfully: Name - ${name}, Value - ${value}`);
  } catch (err) {
    console.error('Error adding data:', err.message);
    res.status(500).send(`Error adding data: ${err.message}`);
  }
});

app.get('/get-data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM data ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error retrieving data:', err.message);
    res.status(500).send(`Error retrieving data: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

