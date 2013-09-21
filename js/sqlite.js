//自定义主键id
if(localStorage.index==undefined){
    localStorage.index=0;
}
var index=localStorage.index;

//打开数据库
var db=openDatabase("player","1.2","player",1024*1024);
//sql语句
var createTableSQL="CREATE table IF NOT EXISTS t_player(p_id int,p_name varchar(50),p_score int,p_golds int)";
var deleteTableSQL="DROP table IF EXISTS t_player";
var insertDataSQL="INSERT INTO t_player (p_id ,p_name,p_score,p_golds) VALUES(?,?,?,?)";
var updateDataSQL="update t_player set p_score=?,p_golds=p_golds+? where p_name=?";
function clearData(){
    getQueryResult(deleteTableSQL,[]);
    localStorage.index=0;
}
//clearData();
/**
 * SQLite数据库封装
 * @param sql
 * @param params
 */
function getQueryResult(sql,params){
    db.transaction(function(obj){
        obj.executeSql(sql,params,function(){
            //Dialog.alert("亲,恭喜您,操作成功!");
        },function(){
            //Dialog.alert("亲,很遗憾,操作失败!");
        });
    });
}
/**
 * 创建表
 */
(function(){
    getQueryResult(createTableSQL,[]);
})();

/**
 * 添加玩家信息
 * @returns {boolean}
 */
if(localStorage.name==undefined){
    localStorage.name="";
}
var isExistFlag=0;
var isSubmit=0;
function pushInfo(){
    if(isSubmit==0){
        var name=$("playerName").value.trim();
        if(name.trim()==""){
            return;
        }
        var score=eval(gameTime*7+imgColorNum*10+imgNum*100);
        isExist(name.trim());
        if(isExistFlag==1){
            getQueryResult(updateDataSQL,[score,imgNum,name]);
        }else{
            index++;         //自定义主键id
            localStorage.index=index;
            var args=[Number(index),name,score,imgNum];      //id name score gold
            getQueryResult(insertDataSQL,args);
        }
        notify("亲，数据提交成功！");
        isSubmit++;
        localStorage.name=name;
    } else{
        return false;
    }
}

/**
 * 显示高分榜
 */
function showData(flag){
    var content="<table style='width: 100%'>";
    db.transaction(function(obj){
        obj.executeSql('SELECT * FROM t_player ORDER BY p_score DESC limit 10;',[],
            function(obj,rs){
                for(var i = 0;i<rs.rows.length;i++){
                    content+="<tr><td style='width: 50%'>"+rs.rows.item(i).p_name+"</td><td style='width: 50%'>"+rs.rows.item(i).p_score+"</td></tr>";
                }
                content+="</table>";
                flag.innerHTML=content;
            },function(obj,error){
                //Dialog.alert("亲,很抱歉,系统繁忙!");
            });
    });
}
/**
 * 获取最高分
 */
var bestScore=0;
function getBestScore(){
    db.transaction(function(obj){
        obj.executeSql('SELECT * FROM t_player ORDER BY p_score DESC limit 1;',[],
            function(obj,rs){
                if(rs.rows.length==0){
                    bestScore=0;
                }else{
                    bestScore=rs.rows.item(0).p_score;
                }
            },function(obj,error){
                bestScore=0;
            });
    });
}

/**
 * 获取玩家总金币数
 */
var playerGolds=0;
function getPlayerGolds(){
        db.transaction(function(obj){
            obj.executeSql('SELECT * FROM t_player where p_name=?;',[localStorage.name],
                function(obj,rs){
                    if(rs.rows.length==0){
                        playerGolds=0;
                    }else{
                        playerGolds=rs.rows.item(0).p_golds;
                    }
                },function(obj,error){
                    playerGolds=0;
                });
        });
}

/**
 * 判断用户名是否存在
 * @param name
 */

function isExist(name){
    db.transaction(function(obj){
        obj.executeSql('SELECT * FROM t_player where p_name=?;',[name],
            function(obj,rs){
                if(rs.rows.length>0){
                    isExistFlag=1;
                }
            },function(obj,error){
                isExistFlag=0;
            });
    });
}

/**
 * 系统通知
 */
function notify(content) {
    if (window.webkitNotifications) {
        if (window.webkitNotifications.checkPermission() == 0) {
            var notification_test = window.webkitNotifications.createNotification("../img/favorite.png", '颜色运行',content);
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


