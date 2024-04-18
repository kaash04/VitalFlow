const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'donors'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Parse JSON bodies
app.use(express.json());

// Route to handle form submissions
app.post('/api', (req, res) => {
  const { uname, age, bloodGroup, contactNumber } = req.body;
  const sql = 'INSERT INTO blood_donors (name, age, blood_group, contact_number) VALUES (?, ?, ?, ?)';
  connection.query(sql, [uname, age, bloodGroup, contactNumber], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).json({ error: 'Error saving donor information' });
      return;
    }
    console.log('New donor added with ID: ' + result.insertId);
    res.json({ message: 'Donor information saved successfully' });
  });
  return true;
});

app.get('/search', (req, res) => {
  const blood_group = req.query.blood_group;
  if (!blood_group) {
      return res.status(400).json({ error: 'Blood group parameter is required' });
  }

  const query = 'SELECT * FROM blood_donors WHERE blood_group = ?';
  connection.query(query, [blood_group], (err, results) => {
      if (err) {
          console.error('Error executing MySQL query:', err);
          return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(results);
  });
  return true;
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
