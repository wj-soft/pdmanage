
/*eslint-disable */
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const ProductsModel = require('./models/ProductsModel')

// 데이터베이스 연결 (mongodb & mongoose & 로컬DB)
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const autoIncrement = require('mongoose-auto-increment')

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => console.log('데이터베이스 연결'))

const connect = mongoose.connect('mongodb://127.0.0.1:27017/myDB', { useMongoClient: true })

//에러 : "mongoose-auto-increment has not been initialized", mongoose-auto-increment has not been initialized
// autoIncrement.initialize(connect);


// 라우팅 모듈
const admin = require('./routes/admin')

// express 서버
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

// 미들웨어 설정
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// server 테스트
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ a: 1 , b:2});
})


// 라우팅
app.use('/admin', admin)

app.listen(port, () =>{
  console.log('서버가동중')
})

