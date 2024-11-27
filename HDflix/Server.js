const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pass@123',
    database: 'hdflix',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

// Registration API
app.post('/registerhd', (req, res) => {
    const { name, mobile, gender, email, password } = req.body;

    // Use parameterized queries to prevent SQL Injection
    const query = `INSERT INTO users (name, mobile, gender, email, password) VALUES ()`;
    db.query(query, [name, mobile, gender, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ msg: 'Database error', error: err });
        }
        res.json({ msg: 'Registration successful!', affectedRows: result.affectedRows });
    });
});

// Fetch Users API
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ msg: 'Database error', error: err });
        }
        res.json(results);
    });
});

// Start the Server
const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
