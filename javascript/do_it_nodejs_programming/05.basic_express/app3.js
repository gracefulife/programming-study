const express = require('express');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 3000);

// 사용자 정의 미들웨어 설정(1)
app.use((req, res, next) => {
    console.log('called first middleware');
    req.user = 'heo won chul';
    next();
});

// 사용자 정의 미들웨어 설정(2)
app.use((req, res, next) => {
    console.log('called second middleware');

    res.writeHead('200', { 'Content-Type' : 'text/html; charset=utf-8' });
    res.end(`<h1>Express 서버에서 ${req.user}가 응답한 결과입니다.</h1>`);
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('started express server : ' + app.get('port'));
});
