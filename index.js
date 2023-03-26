const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Server has started on port 3000... ')
})


class MeetUp{
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

let meetups = [new MeetUp(1, 'ksdfldkf', 'dnjksnjdkf', ['cool', 'super'], '13 Aug', 'London'), new MeetUp(2, 'ksdfldkf', 'dnjksnjdkf', ['cool', 'super'], '13 Aug', 'London')];
