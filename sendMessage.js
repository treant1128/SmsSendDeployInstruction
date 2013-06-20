$(document).ready(function(){
        var msg={};
        var urlArray=[];

        //send the 18th column (url field) of the table to parent window as a confirm  message
        $(".fo_ta_1 tr td:nth-child(18)").each(function(index,item){
//                console.log(item.innerText);
                urlArray.push(item.innerText);
        });

        msg.checkSMSTaskDataCallback=urlArray;
        window.parent.postMessage(msg, '*');
});
