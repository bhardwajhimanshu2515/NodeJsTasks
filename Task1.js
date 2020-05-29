var html=`<!DOCTYPE html>
<html>
    <head>
        <title>Heading Change using js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body{
                margin:0;
                font-family: Arial;
            }
            #navbar,#bottom{
                width:100%;
                height:200px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 60px;
                color: white;
                background: #314755;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #26a0da, #314755);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #26a0da, #314755); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            }
            #container{
                width:80%;
                height:400px;
                margin:40px 10%;
                background: #77A1D3;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #E684AE, #79CBCA, #77A1D3);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #E684AE, #79CBCA, #77A1D3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            #heading{
                font-size: 50px;;
            }
            @media only screen and (max-width:1024px){
                #navbar,#bottom{
                    height:300px;
                }
                #heading{
                    font-size: 40px;;
                }
                #container{
                    height:680px;
                }
            }
            @media only screen and (max-width:768px){
                #container{
                    height:550px;
                }
                #heading{
                    font-size: 40px;;
                }
            }
            @media only screen and (max-width:414px){
                #navbar,#bottom{
                    font-size: 25px;
                    height:120px;
                }
                #heading{
                    font-size:30px;;
                }
            }
            @media only screen and (max-width:375px){
                #container{
                    height:490px;
                }
            }
            @media only screen and (max-width:320px){
                #navbar,#bottom{
                    height:80px;
                    font-size: 20px;;
                }
                #heading:{
                    font-size: 20px;;
                }
                #container{
                    height: 400px;;
                }
            }
            @media only screen and (max-width:411px){
                #navbar,#bottom{
                    height:125px;
                    font-size: 25px;;
                }
                #heading{
                    font-size:25px;
                }
                #container{
                    height:500px;
                }
            }


            @media only screen and (max-width:360px){
                #navbar,#bottom{
                    height:80px;
                    font-size: 20px;
                }
                #heading{
                    font-size: 20px;
                }
            }


        </style>
    </head>
    <body>
        <div id="navbar">
            Heading Change Using Js
        </div>
        <div id="container">
            <div id="heading">
                Hii !! here is heading
            </div>
            <div id="formch" style="border: 1px solid white;">
                <label>Text for new heading:</label><br><br>
                <input type="text" style="border-radius: 10px;padding:10px 10px;" id="textbox"><br><br>
                <button style="border-radius: 10px;padding:10px 10px;" id="butt">Click me to change heading</button>
            </div>
        </div>
        <div id="bottom">
            Thanks For Visiting
        </div>
        <script>
            var heading=document.getElementById('heading');
            var text=document.getElementById('textbox');
            var changebutton=document.getElementById('butt');
            changebutton.addEventListener('click',function(e){
                var textval=text.value;
                heading.innerHTML=textval;
            });
        </script>
    </body>
</html>`;
var http=require('http');
var server=http.createServer((req,res)=>{
    console.log("Request received from Localhost");
    res.write(html);
    res.end;
});
server.listen(8081);