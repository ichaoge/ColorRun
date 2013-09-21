/**
 * 对话框封装(高分榜,游戏暂停)
 * @type {{}}
 */

var Dialog={
    alert:function(flag,arr){
        var  dialog= document.createElement("div");
        dialog.className = 'dialog_high_score_main';
        switch(flag){
            case 1:{
                //main界面
                var right_botton_top = document.createElement("img");
                right_botton_top.style.zoom = "0.8"
                right_botton_top.src = "../img/dialog/home.png";
                right_botton_top.className = 'right_button_one';
                right_botton_top.id= 'right_button_one';
                right_botton_top.style.cursor = "pointer";
                right_botton_top.title = "回到主页";
                right_botton_top.onclick=function(){
                    location.href = "../index.html";
                }
                //高分按钮
                var right_botton_mid = document.createElement("img");
                right_botton_mid.style.zoom = "0.8"
                right_botton_mid.src = "../img/dialog/high.png";
                right_botton_mid.className = 'right_button_two';
                right_botton_mid.id= 'right_button_two';
                right_botton_mid.style.cursor = "pointer";
                right_botton_mid.title="高分榜";
                right_botton_mid.onclick = function(){
                    Dialog.alert(2,[]);
                }
                //replay按钮
                var right_botton_bottom = document.createElement("img");
                right_botton_bottom.style.zoom = "0.8"
                right_botton_bottom.src = "../img/dialog/replay_none.png";
                right_botton_bottom.className = 'right_button_three';
                right_botton_bottom.id= 'right_button_three';
                right_botton_bottom.onclick = function(){
                    location.reload(true);
                }
                right_botton_bottom.style.cursor = "pointer";
                right_botton_bottom.title="重新游戏";
                //ranman
                var run_man = document.createElement("img");
                run_man.style.zoom = "0.6" ;
                run_man.src = "../img/main/man.gif";
                run_man.className = 'run_man';
                run_man.onclick = function(){
                    location.reload(true);
                }
                run_man.style.cursor = "pointer";
                run_man.title="重新游戏";
                //gameover标题
                var gameover = document.createElement("img");
                gameover.style.zoom = "0.8"
                gameover.src = "../img/dialog/gameover.png";
                gameover.className = 'gameover_title';
                gameover.id= 'gameover_title';
                //gameover_main
                var gameover_bg = document.createElement("img");
                gameover_bg.src ="../img/dialog/bg.png";
                gameover_bg.style.zoom = "0.8"
                gameover_bg.className = "gameover_bg";
                //span标签
                var firstspan = document.createElement("span");
                firstspan.className = "firstspan";
                firstspan.innerHTML = arr[0];
                var secondspan = document.createElement("span");
                secondspan.className = "secondspan";
                secondspan.innerHTML =arr[1];
                var threespan = document.createElement("span");
                threespan.className = "threespan";
                threespan.innerHTML = arr[2];
                var fourspan = document.createElement("span");
                fourspan.className = "fourspan";
                fourspan.innerHTML = arr[4];
                var fivespan = document.createElement("span");
                fivespan.className = "fivespan";
                fivespan.innerHTML = arr[3];
                var sixspan = document.createElement("span");
                sixspan.className = "sixspan";
                sixspan.innerHTML =playerGolds;
                var sevenspan = document.createElement("span");
                sevenspan.className = "sevenspan";
                sevenspan.innerHTML = bestScore==0||bestScore<arr[3] ? arr[3]:bestScore;

                //大名
                var player = document.createElement("input");
                player.className = "player";
                player.id="playerName";
                player.autofocus="true";
                player.maxLength="5";
                player.value = localStorage.name=="" ? "Type Here.":localStorage.name;
                player.onclick = function(){
                    player.value = '';
                }
                player.onkeyup=function(){
                    player.value=player.value.replace(/[&%]*/g,'');
                }
                player.onblur = function(){
                    if(player.value==''){
                        player.value="Type Here.";
                    } else{
                        pushInfo();
                        localStorage.name= player.value.trim();
                    }
                }

                target.appendChild(dialog);
                dialog.appendChild(right_botton_top);
                dialog.appendChild(right_botton_mid);
                dialog.appendChild(right_botton_bottom);
                dialog.appendChild(run_man);
                dialog.appendChild(gameover);
                dialog.appendChild(gameover_bg);
                dialog.appendChild(firstspan);
                dialog.appendChild(secondspan);
                dialog.appendChild(threespan);
                dialog.appendChild(fourspan);
                dialog.appendChild(fivespan);
                dialog.appendChild(sixspan);
                dialog.appendChild(sevenspan);
                dialog.appendChild(player);
                break;
            }
            case 2:{
                //gameover标题
                dialog.className="setDialog";
                var high_score_titlt = document.createElement("img");
                high_score_titlt.src = "../img/dialog/top/top10.png";
                high_score_titlt.style.zoom = "0.7"
                high_score_titlt.className = 'high_score_titlt';
                //gameover_main
                var high_score_bg = document.createElement("img");
                high_score_bg.src ="../img/dialog/top/top_bg.png";
                high_score_bg.className = "high_score_bg";

                //high_return
                var high_return = document.createElement("img");
                high_return.src ="../img/dialog/top/left.png";
                high_return.className = "high_return";
                //high_return.onclick = returnHighScore;
                high_return.title = "返回游戏结束";
                high_return.onclick=function(){
                     dialog.parentNode.removeChild(dialog);
                }
                var high_data = document.createElement("div");
                high_data.className="index_high_data";
                showData(high_data);
                //game_pause
                target.appendChild(dialog);
                dialog.appendChild(high_score_titlt);
                dialog.appendChild(high_score_bg);
                dialog.appendChild(high_return);
                dialog.appendChild(high_data);
                break;
            };
            case 3:{
                //pause_home
                var pause_home = document.createElement("img");
                pause_home.src ="../img/dialog/home.png";
                pause_home.className = "pause_home";
                pause_home.title = "返回主页";
                pause_home.onclick=function(){
                    location.replace("../index.html");
                }
                //game_start
                var game_start = document.createElement("img");
                game_start.src ="../img/dialog/pause/refresh.png";
                game_start.className = "game_start";
                game_start.style.zoom = "0.8";
                game_start.title = "重新开始";
                game_start.onclick=function(){
                    location.reload(true);
                }
                //game_continue;
                var game_continue = document.createElement("img");
                game_continue.src ="../img/dialog/pause/right.png";
                game_continue.className = "game_continue";
                game_continue.style.zoom = "0.8";
                game_continue.title = "继续游戏";
                game_continue.onclick=function(){
                    dialog.parentNode.removeChild(dialog);
                    allCtrl=setInterval("gameStart()",20);
                }
                target.appendChild(dialog);
                dialog.appendChild(pause_home);
                dialog.appendChild(game_start);
                dialog.appendChild(game_continue);
                break;
            }
            case 4:{
                var index_content=$("index_content");
                //gameover标题
                var high_score_titlt = document.createElement("img");
                high_score_titlt.src = "img/dialog/top/top10.png";
                high_score_titlt.style.zoom = "0.7"
                high_score_titlt.className = 'high_score_titlt';
                //gameover_main
                var high_score_bg = document.createElement("img");
                high_score_bg.src ="img/dialog/top/top_bg.png";
                high_score_bg.className = "high_score_bg";

                //high_return
                var high_return = document.createElement("img");
                high_return.src ="img/dialog/top/left.png";
                high_return.className = "high_return";
                high_return.onclick = returnIndex;
                high_return.title = "返回首页";

                var high_data = document.createElement("div");
                high_data.className="index_high_data";
                showData(high_data);
                //game_pause
                index_content.appendChild(dialog);
                dialog.appendChild(high_score_titlt);
                dialog.appendChild(high_score_bg);
                dialog.appendChild(high_return);
                dialog.appendChild(high_data);
                break;
            };
        }
    }
};