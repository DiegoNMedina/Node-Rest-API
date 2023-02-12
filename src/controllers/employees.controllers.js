import { pool } from '../db.js';

export const getEmployees = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM employee');
        res.json(rows);
    }

    catch (error) {
        res.status(500).json({ message: 'Something goes wrong' });
    }
}

export const getEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

        if(rows.length === 0) return res.status(404).json({ message: 'Employee not found' });

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Something goes wrong' });
    }
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
    res.send({
        id: rows.insertId,
        name,
        salary
    });

}

export const updateEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, salary } = req.body;

        const exists = await validateEmployeeExists(name);
        if(exists) return res.status(400).json({ message: 'Employee already exists' });

        const [rows] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);

        if(rows.affectedRows === 0) return res.status(404).json({ message: 'Employee not found fe' });

        res.json({ id: id, name: name, salary: salary });
    } catch (error) {
        res.status(500).json({ message: 'Something goes wrong' });
    }
}

const validateEmployeeExists = async (name) => {

    const [rows] = await pool.query('SELECT * FROM employee WHERE name = ?', [name]);
    return rows.length > 0;
}

export const deleteEmployee = async (req, res) => {

    try {
        const { id } = req.params;

        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

        if(result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });

        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Something goes wrong' });
    }
}