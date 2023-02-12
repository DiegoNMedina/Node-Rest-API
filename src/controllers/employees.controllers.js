import { pool } from '../db.js';

export const getEmployee = (req, res) => res.send('Get all employees')

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
    res.send({rows});
}

export const updateEmployee = (req, res) => res.send('Update employee')

export const deleteEmployee = (req, res) => res.send('Delete employee')