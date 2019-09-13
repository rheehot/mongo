// require list
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const appPort = 3000;
const mongoPort = 27017;

// Static File Service
app.use(express.static('public'));
// bodyParser 적용
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// nodejs의 native Promise 사용
// mongoose가 자체적으로 지원하는 mPromise는 deprecated(더 이상 사용되지 않음)되었으므로 Node.js가 지원하는 ES6의 promise를 사용
mongoose.Promise = global.Promise;

// 몽고 서버 연결
mongoose.connect('mongodb://localhost:27017/board-db-name', {useMongoClient: true})
    .then(()=> console.log("Successfully connected to mongodb"))
    .catch(err => console.error(err))

app.listen(appPort, ()=> console.log(`Server listening on port ${appPort}`));