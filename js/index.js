function $(eve){
    return document.getElementById(eve)
}
/**
 * 开始游戏
 */
function startGame(){
    window.location.replace("page/main.html");
}
/**
 * 显示高分榜
 */
function showHighScore(){
    //notify();
    Dialog.alert(4,[]);
}
/**
 * 返回首页
 */
function returnIndex(){
    location.reload(true);
}

/**
 * 音效控制
 */

function controlSound(){
    var soundFlag=localStorage.isOpenSound;
    if(soundFlag=="yes"){
        $("game_sound").muted=true;
        obj.title="开启音效";
        obj.style.background="url('img/button/noSound.png') no-repeat";
        localStorage.isOpenSound="no";
    }else{
        $("game_sound").muted=false;
        obj.title="关闭音效";
        obj.style.background="url('img/button/sound.png') no-repeat";
        localStorage.isOpenSound="yes";
    }
}

window.onload=function(){
    obj=$("sound_button");
    if(localStorage.isOpenSound==undefined){
        localStorage.isOpenSound="yes";
    }
    if(localStorage.isOpenSound=="yes"){
        $("game_sound").muted=false;
        obj.title="关闭音效";
        obj.style.background="url('img/button/sound.png') no-repeat";
    }else{
        $("game_sound").muted=true;
        obj.title="开启音效";
        obj.style.background="url('img/button/noSound.png') no-repeat";
    }
}
/**
 * 系统通知
 */
function notify() {
    if (window.webkitNotifications) {
        if (window.webkitNotifications.checkPermission() == 0) {
            var notification_test = window.webkitNotifications.createNotification("img/favorite.png", '颜色运行', '高分榜正在抓紧开发中...');
            notification_test.display = function() {}
            notification_test.onerror = function() {}
            notification_test.onclose = function() {}
            notification_test.onshow  = function() { setTimeout('notification_test.cancel()', 5000); }
            notification_test.onclick = function() {this.cancel();}
            notification_test.replaceId = 'Meteoric';
            notification_test.show();
        } else {
            window.webkitNotifications.requestPermission(notify);
        }
    }
}