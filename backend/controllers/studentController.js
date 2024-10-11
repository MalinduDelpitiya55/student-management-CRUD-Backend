import connection from './../config/dbConnection.js';

export const getAllStudents = (req, res) => {
    connection.query('SELECT * FROM students', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
};

export const addStudent = (req, res) => {
    const { name, age, contact, guardian_name, address, guardian_contact } = req.body;
    const query = 'INSERT INTO students (name, age, contact, guardian_name, address, guardian_contact) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [name, age, contact, guardian_name, address, guardian_contact], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Registration failed' });
        }
        res.status(201).json({ message: 'Student Registration successfully', studentId: result.insertId });
    });
};

export const updateStudent = (req, res) => {
    const { name, age, contact, guardian_name, address, guardian_contact } = req.body;
    const query = 'UPDATE students SET name = ?, age = ?, contact = ?, guardian_name = ?, address = ?, guardian_contact = ? WHERE id = ?';

    connection.query(query, [name, age, contact, guardian_name, address, guardian_contact, req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Student Updating error' });
        }
        res.json({ message: 'Student Updated successfully' });
    });
};

export const deleteStudent = (req, res) => {
    const query = 'DELETE FROM students WHERE id = ?';

    connection.query(query, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Student Deleting error' });
        }
        res.json({ message: 'Student Deleted successfully' });
    });
};
