var exec=require('child_process').exec, child;
var fs=require('fs');
var express=require('express');
var app=express();
var server=require('http').createServer(app);

var rootPath='/home/setup/mt/init/';


app.use(express.bodyParser({}));

server.listen(8000);

app.all('/', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

app.get('/getDir', function(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var vv=fs.readdirSync(rootPath);
        res.send(vv);
});

app.post('/getFiles', function(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested_with");

    var result=[];

    var path=req.body.dirName;
    var names=fs.readdirSync(rootPath+path);

    for(var i=0;i<names.length;i++){

        if(names[i].substr(0, 1)!='.'){
                console.log(names[i]);

                var r=new Object();
                r.fileName=names[i];
//not read number count at this moment !!!
//       child=exec('cat /home/setup/mt/init/'+path+'/'+names[i]+' |wc -l', function (error, stdout, stderr){
//               console.log(stdout);
//           result.lineCount=stdout;
//         });
         result.push(r);
        }
    }

//    console.log(JSON.stringify(result));
    res.send(result);
//    res.send(JSON.stringify(names));
});
