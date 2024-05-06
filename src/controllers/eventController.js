
import { pool } from '../db.js';

export async function insertNewEvent(req, res) {
  const { event_name,event_ort,event_start,event_ende,event_beschreibung_kurz,event_beschreibung_lang,event_genre,event_link,event_bild,user_id } = req.body;
  console.log(req.body)
  try {
      const { rows: event } = await pool.query(
          'INSERT INTO event (event_name,event_ort,event_start,event_ende,event_beschreibung_kurz,event_beschreibung_lang,event_genre,event_link,event_bild, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
          [event_name,event_ort,event_start,event_ende,event_beschreibung_kurz,event_beschreibung_lang,event_genre,event_link,event_bild,user_id]
      );
      res.json(event);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}

export async function updateEvent(req, res) {
    const {id} = req.params;
    console.log(id);
    const { event_name,event_ort,event_start,event_ende,event_beschreibung_kurz,event_beschreibung_lang,event_genre,event_link,event_bild,user_id } = req.body;
    console.log(req.body)
    try {
        
        const { rows: event } = await pool.query(    
            'UPDATE  event SET event_name = $1, event_ort = $2, event_start = $3, event_ende = $4, event_beschreibung_kurz = $5, event_beschreibung_lang = $6,event_genre = $7, event_link = $8, event_bild = $9, user_id = $10  WHERE event_id = $11 RETURNING *',
            [event_name,event_ort,event_start,event_ende,event_beschreibung_kurz,event_beschreibung_lang,event_genre,event_link,event_bild,user_id,id]
        );
        res.json(event);
        console.log(event);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  }

export async function getEvents(req, res) {
  try {
      const { rows: events } = await pool.query('SELECT * FROM event ');
      console.log("hi User", events);
      res.send(events);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
}

export async function getEvent(req, res) {
    const {id} = req.params;
    try {
        const { rows: event } = await pool.query('SELECT * FROM event WHERE event_id = $1',
        [id]);
        console.log("hi User", event);
        res.send(event);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  }