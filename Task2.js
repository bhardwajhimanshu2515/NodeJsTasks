var http=require('http');
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
function createhtml(i){
    var html='\
    <div>\
    <div id="thetitle">\
    <h3>Title is :'+tasklist[i].title+'</h3>\
    </div>\
    <div id="thedeadline">\
    Deadline is :'+tasklist[i].deadline+'\
    </div>\
    </div><br><br>';
    return html;
}
var server=http.createServer((req,res)=>{
    console.log("Request recieved from https://localhost:8081");
    for (var i=0;i<tasklist.length;i++){
        res.write(createhtml(i));
        res.end;
    }
});
server.listen(8081);