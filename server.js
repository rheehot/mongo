const express = require('express');
const app = express();
const router = require('./router/main')(app);
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// mongo db 연결 
mongo.connect(url, (err,client)=>{
    if(err){
        console.error(err)
        return
    }
    // db connection 부분    
    const db = client.db('street-shop-server');
    const collection = db.collection('street-shop');   
    // db 의 document 추가 부분
    collection.insertOne({name:"또르's 멍멍이"}, (err,result)=>{

    })
    collection.updateOne({name: '또르'}, {'$set': {'name': '또루스키'}}, (err, item) => {
        console.log(item)
    })

    // db 조회 부분
    collection.find().toArray((err,items)=>{
        console.log(items)
    })

    // db 내용 삭제 부분
    collection.deleteOne({name:"또르"}, (err,item)=>{
        console.log(item)
    })

    // 삭제 확인
    collection.find().toArray((err,items)=>{
        console.log(items)
    })
})

const server = app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000')
});

app.use(express.static('public'));