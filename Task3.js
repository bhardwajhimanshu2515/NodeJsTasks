var http=require('http');
var url=require('url');
var tasklist=[{
    title:"gymshym",
    deadline:"today"
},
{
    title:"movieshovie",
    deadline:"yesterday"
},
{
    title:"khanashana",
    deadline:"today"
}
];
var server=http.createServer((req,res)=>{
    var querystrings=url.parse(req.url,true).query;
    var deadline=querystrings.deadline;
    console.log("Request received");
    for(var i=0;i<tasklist.length;i++){
        if(tasklist[i].deadline===deadline){
            res.write('\
            <div>\
            <div id="thetitle">\
            <h3>Title is :'+tasklist[i].title+'</h3>\
            </div>\
            <div id="thedeadline">\
            Deadline is :'+tasklist[i].deadline+'\
            </div>\
            </div><br><br>');
            res.end;
        }
    }
});
server.listen(8081);
