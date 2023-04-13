const db = require('../db')

class MeetupController {
    async create(req, res) {
      const {title, description, keywords, time, place} = req.body;
      const newMeetup = await db.query("INSERT INTO meetups (title, description, keywords, time, place) VALUES ($1, $2, $3, $4, $5) RETURNING id", [title, description, keywords, time, place]);
      let m = new Meetup(newMeetup.rows[0].id, title, description, keywords, time, place);
      res.status(200);
      res.json(m);
    }

    async get(req, res) {
      const meetups = await db.query('SELECT * FROM meetups');
      res.status(200);
      res.json(meetups.rows);
    }

    async getById(req, res) {
      const id = req.params.id;
      const meetup = await db.query('SELECT * FROM meetups WHERE id = $1', [id]);
      res.status(200);
      res.json(meetup.rows[0]);
    }

    async update(req, res) {
      const {title, description, keywords, time, place} = req.body;
      const meetup = await db.query('UPDATE meetups set title = $1, description = $2, tags = $3, time = $4, place = $5 WHERE id = $6 RETURNING *', [title, description, keywords, time, place, req.params.id]);
      res.status(201);
      res.json(meetup.rows[0]);
    }

    async delete(req, res) {
      const id = req.params.id;
      const meetup = await db.query('DELETE FROM meetups WHERE id = $1', [id]);
      res.status(200);
      res.json(meetup.rows[0]);
    }

}
class Meetup{
    constructor(id, title, description, keywords, time, place) {
      this.id  = id
      this.title = title
      this.description = description
      this.keywords = keywords
      this.time = time
      this.place = place
    }
}

module.exports = new MeetupController()
