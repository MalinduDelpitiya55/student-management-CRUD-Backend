import express from 'express';
import dotenv from 'dotenv';
import Connection from './config/dbConnection.js';
import studentRoutes from './routes/studentRoutes.js';
const app = express();
dotenv.config();
app.get('/', (req, res) => { res.send("Server is ready") });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/students', studentRoutes);
app.get('/students', (req, res) => {
    Connection.query('SELECT * FROM students', (err, results) => {
        if (err) {
            return res.status(500).send('Error querying the database');
        }
        res.json(results);
    });
});