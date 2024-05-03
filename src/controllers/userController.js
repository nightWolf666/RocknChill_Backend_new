
import { pool } from '../db.js';

export async function insertNewUser(req, res) {
  const { user_name,email,passwort,urlaubstage,budget,avatar_link } = req.body;
  console.log(req.body)
  try {
      const { rows: users } = await pool.query(
          'INSERT INTO users (user_name,email,passwort,urlaubstage,budget,avatar_link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [user_name,email,passwort,urlaubstage,budget,avatar_link]
      );
      res.json(users);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}

export async function updateUser(req, res) {
    const {id} = req.params;
    console.log(id);
    const { user_name,email,passwort,urlaubstage,budget,avatar_link } = req.body;
    console.log(req.body)
    try {
        const { rows: user } = await pool.query(
            'UPDATE  users SET user_name = $1, email = $2, passwort = $3, urlaubstage = $4, budget = $5, avatar_link = $6 WHERE user_id = $7 RETURNING *',
            [user_name,email,passwort,urlaubstage,budget,avatar_link,id]
        );
        res.json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  }

export async function getUsers(req, res) {
  try {
      const { rows: users } = await pool.query('SELECT * FROM users ');
      console.log("hi User", users);
      res.send(users);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}

export async function getUser(req, res) {
    const {id} = req.params;
    try {
        const { rows: users } = await pool.query('SELECT * FROM users WHERE user_id = $1',
        [id]);
        console.log("hi User", users);
        res.send(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  }