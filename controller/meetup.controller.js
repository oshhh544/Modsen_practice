const db = require('../db')

class MeetupController {
    async create(req, res) {

    }

    async get(req, res) {

    }

    async getById(req, res) {

    }

    async update(req, res) {

    }

    async delete(req, res) {

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