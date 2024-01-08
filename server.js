const express = require('express');
const path = require('path');
const app = express();


// 定义路由，当访问 / 时渲染 views/index.html 并发送给客户端
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/paint', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'paint.html'));
});

app.get('/paint2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'paint2.html'));
});

app.get('/test', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'views', 'test.html'));
});

app.get('/paint3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'paint3.html'));
});

app.use(express.static('public')); 
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
  