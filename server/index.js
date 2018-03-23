const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

var ProductsModel = require('./models/ProductsModel');
//데이터베이스 연결 (mongodb & mongoose & 로컬DB)
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const autoIncrement = require('mongoose-auto-increment')

const db = mongoose.connection
  .on('error', console.error)
  .once('open', () => console.log('데이터베이스 연결'))

const connect = mongoose.connect('mongodb://127.0.0.1:27017/myDB')
// autoIncrement.initialize(connect);

//express 서버
const app = express()
const port = process.env.PORT || 3000

//미들웨어 설정
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//server 테스트
app.get('/', (req, res) => {
  res.send('start')
});

app.post('/test', (req, res) =>{
  var product = new ProductsModel({
    name: "test",
    price:  100,
    description: "db 데이터 테스트"
  })
  product.save(err => console.log(err))
})



app.listen(port, () =>{
  console.log('서버가동중')
})

