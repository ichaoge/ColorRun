var socket;
/**
 * 初始化Web Socket
 */
function initSocket(){
    var host = "ws://localhost:80/ColorRun/server/service/main.php";
    socket = new WebSocket(host);
    console.log('WebSocket - status '+socket.readyState);
    socket.onopen = function(msg){
        console.log("Welcome - status "+this.readyState);
    };
    socket.onmessage = function(msg){
        console.log("Received: "+msg.data);
    };
    socket.onclose   = function(msg){
        console.log("status "+this.readyState);
    };
}
/**
 * 通过Web Socket发送玩家信息给后台
 */
function sendPlayerInfo(){
    var playerName="";
    var playerScore=0;
    var playerDate=getNowFormatDate();
    if(playerName==""){
        alert("请输入您的昵称！");
        return;
    }
    var sendContent=playerName+","+playerScore+","+playerDate;
    console.log(sendContent);
    socket.send(sendContent);
}

/**
 * 断开连接
 */
function closeSocket(){
    socket.close();
    socket=null;
}