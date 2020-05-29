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
    var responsearray=[];
    for(var i=0;i<tasklist.length;i++){
        if(tasklist[i].deadline===deadline){
            responsearray.push(tasklist[i]);
            res.end;
        }
    }
    var stringarray=JSON.stringify(responsearray);
    res.write(stringarray);
    res.end();
});
server.listen(8081);
