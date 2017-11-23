app.get('/getNews',function(req,res){
  var mynews = [];
  var len = 4;
  var idx = parseInt(req.query.news);

  for(var i = idx; i < idx+len; i++) {
    mynews.push(i);
  }

  res.send(mynews);
});