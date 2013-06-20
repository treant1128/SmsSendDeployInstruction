
 $(document).ready(function(){
        console.log("Already~~");

        var msg={};
        var childPath=[];

    window.onmessage=function(event){

        msg=event.data;
                console.log("Receiver Message");
                console.log(msg);

        if(msg.srcfile!=undefined){
                        //选择文件selector
                        setTimeout(function(){
                                var srcFile=msg.srcfile;
                                var fileArray=srcFile.split("|");
                                //字符串以"|"结尾, fileArray最后一项为空
                                fileArray.pop();
                                var rootPath="";

                                for(var i=0; i<fileArray.length; i++){
                                        var temp=fileArray[i].split("/");
                                        rootPath=temp[0];
                                        childPath.push(temp[1]);
                                }

                                console.log(rootPath);
                                console.log(childPath);

                          $("#filePath").val(rootPath);
                          $("#filePath").trigger("change");

                        }, 2000);  //End of setTimeout

                        $("#sendTitle").val(msg.send_title);

                        //下发URL
                $("#sendOUrl").val(msg.send_o_url);

                        //描述content
                $("input[name='smsTask.content']").val(msg.content);

                $("select[name='smsTask.priority']").val(msg.priority);

                        //发送方式 method(0短信 1 Push)
                        var temp=msg.method;   console.log("发送方式method="+temp);
                if(temp==0){
                        $("#method0").attr("checked", true);
                }else{
                                $("#method1").attr("checked", true);
                }

                        temp=msg.long_title;
                        console.log("是否保留长标题="+temp);
                        console.log($("input[name='smsTask.longTitle'][value=1]"));

                        if(temp==0){
                                $("input[name='smsTask.longTitle'][value=0]").attr("checked", true);
                        }else{
                                $("input[name='smsTask.longTitle'][value=1]").attr("checked", true);
                        }

                   //跳出31597
                   temp=msg.jump;  console.log("跳出31597="+temp);
                if(temp==0){
                                $("#jump").attr("checked", true); console.log("jump000");
                }else if(temp==1){
                                $("#jump1").attr("checked", true); console.log("jump111");
                }else{
                                $("#jump2").attr("checked", true);  console.log("jump222");
                        }

                        //去重规则
                        temp=msg.qc_type;  console.log("去重规则="+temp);
                        if(temp==7){
                                $("#qcType7").attr("checked", true);
                        }else if(temp==6){
                                $("#qcType6").attr("checked", true);
                        }else if(temp==5){
                                $("#qcType5").attr("checked", true);
                        }else{
                                $("#qcType0").attr("checked", true);
                        }


                $("#numDiv").live("DOMSubtreeModified", function(data){
                         //号码包checkbox遍历选中

                                for(var i=0; i<childPath.length; i++){
                                        var v=$("#numDiv input[value="+childPath[i]+"]");
                                        v[0].checked=true;
                                }

                        $("#button_submit").trigger("click");
                        console.log("live live live");
        }); //End of live...


        }else{
                        console.log("######################");
                } //End of if audit_suggestion

    };  //End of on message

 }); //End of document ready
