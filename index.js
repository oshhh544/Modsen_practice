const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Server has started on port 3000')
})

app.get('/meeetUps', function(req, res){
  res.send(meetUps)
})

app.get('/meeetUps/:id', function(req, res){
  meetups.forEach(element => {
    if(element.id == req.params.id)
    res.send(element)
  });
})

app.delete('/meetups/:id', function(req, res){
  meetups.forEach((element, index) => {
    if(element.id == req.params.id)
    {
      meetUps.slice(index, 1)
      res.status(201).end()
    }
  }
)}
  )
  

class Meetup{
  constructor(id, title, description, keywords, time, place) {
    this.id  = id
    this.title = title
    this.description = description
    this.keywords = keywords
    this.time = time
    this.place = place
  }

  showAll(){
    console.log(`Тема: ${this.title}, Описание: ${this.description}, Ключевые слова: ${this.keywords} , Время: ${this.time}, Место: ${this.place}`)
  }

  create(id, title, description, keywords, time, place) {
    return new MeetUp(id, title, description, keywords, time, place)
  }
  
}
 let meetups = [new Meetup(2, 'конференция', ' ', [' ', ' ', ' ' ], '16.06.2026', ' '), new Meetup(3, 'конференция', ' ', [' ', ' ', ' ' ], '16.06.2026', ' ')]
 


