var fs  = require('fs');
var http  = require('http');


// 利用文件模块创建一个html文件
fs.writeFile(__dirname + "/index.html", "<h1>hello nodejs</h1>", function(error){
  if(error) {
    return console.log(error);
  } else {
    return console.log("success!");
  }
});


// 利用 http 模块 下载图片到本地
var photoLocation = 'http://wx4.sinaimg.cn/large/6fde9058gy1fo9xpz6jvpg20dw09d7wi.gif';

http.get(photoLocation, function(response){
  response.pipe(fs.createWriteStream(__dirname + "/funnyMotion.gif"));
});