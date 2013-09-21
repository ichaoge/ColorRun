/**
 * 游戏形状封装
 * @type {{}}
 */

var Shape={
    /**
     *  完整的安卓形状
     */
    "android":function(context,i){
            context.scale(0.8,0.7);
        //--------角
        if(colorState[0]==1){
        //机器人的角的宽度
        context.lineWidth =6; // Make lines thick
        //机器人角的颜色
        context.strokeStyle=colorarray[i][colorFlag[0]];
        //机器人左角
        context.beginPath(); // Start the path
        context.moveTo(24, 0); // Set the pathorigin
        context.lineTo(53, 28); // Set the pathdestination
        context.closePath(); // Close the path
        context.stroke(); // Outline the path
        //机器人右角
        context.beginPath(); // Start the path
        context.moveTo(106, 0); // Set the pathorigin
        context.lineTo(77, 28); // Set the pathdestination
        context.closePath(); // Close the path
        context.stroke(); // Outline the path
        }
        //----------头部绘画
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.arc(68,60,40,Math.PI*2,Math.PI*1,true) ;
            context.closePath();
            context.fill();
        }
        //-----------眼睛
        if(colorState[0]==1){
            //机器人眼睛的颜色
            context.fillStyle=colorarray[i][colorFlag[0]];
            //左眼圆
            context.beginPath();
            context.arc(51,42,5,Math.PI*2,Math.PI*0,false) ;
            context.closePath();
            context.fill();
            //右眼圆
            context.beginPath();
            context.arc(85,42,5,Math.PI*2,Math.PI*0,false) ;
            context.closePath();
            context.fill();
        }
        //---------------身子
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            //左半身下部分半圆
            context.beginPath();
            context.arc(35,160,7,Math.PI*1,Math.PI*0.5,true) ;
            //右半身下部分半圆
            context.arc(101,160,7,Math.PI*0.5,Math.PI*0,true) ;
            context.lineTo(108,70);
            context.lineTo(28,70);
            context.closePath();
            context.fill();
        }
        //-------------手臂
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            //左手上部分半圆
            context.beginPath();
            context.arc(7,80,7,Math.PI*2,Math.PI*1,true) ;
            //左手下部分半圆
            context.arc(7,130,7,Math.PI*1,Math.PI*0,true) ;
            context.closePath();
            context.fill();
            //右手上部分半圆
            context.beginPath();
            context.arc(129,80,7,Math.PI*2,Math.PI*1,true) ;
            //右手手下部分半圆
            context.arc(129,130,7,Math.PI*1,Math.PI*0,true) ;
            context.closePath();
            context.fill();
        }
        // ---------------脚 ---------------------
        if(colorState[4]==1){
            context.fillStyle=colorarray[i][colorFlag[4]];
            //左脚下部分半圆
            context.beginPath();
            context.arc(46,200,8,Math.PI*2,Math.PI*1,false) ;
            context.closePath();
            context.fill();
            //右脚下部分半圆
            context.beginPath();
            context.arc(92,200,8,Math.PI*2,Math.PI*1,false) ;
            context.closePath();
            context.fill();
            ///左腿矩形
            context.fillRect(38,167,16,35);
            ///右腿矩形
            context.fillRect(84,167,16,35);
        }
    },
    /**
     *  完整的电风扇形状
     */
    "fan":function(context,i){
            context.scale(0.4,0.4);
            context.translate(0,60);
        // --------风扇头部外部圆
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.arc(80,90,70,Math.PI*2,0,true) ;
            context.arc(80,90,80,0,Math.PI*2,false);
            context.closePath();
            context.fill();
            //context.lineWidth=10;
        }
        //风扇头部内部圆
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.arc(80,90,15,Math.PI*2,0,true) ;
            context.arc(80,90,25,0,Math.PI*2,false);
            context.closePath();
            context.fill();
        }
        //风扇内部扇叶
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.arc(80,90,20,Math.PI*2/9*8,Math.PI*2/9*1,false) ;
            context.arc(90,100,50,Math.PI*2/9*1.25,Math.PI*2/9*8,true) ;
            context.closePath();
            context.fill();
            context.beginPath();
            context.arc(80,90,20,Math.PI*2/9*2,Math.PI*2/9*4,false) ;
            context.arc(65,94,50,Math.PI*2/9*4.25,Math.PI*2/9*2,true) ;
            context.closePath();
            context.fill();
            context.beginPath();
            context.arc(80,90,20,Math.PI*2/9*5,Math.PI*2/9*7,false) ;
            context.arc(81,75,50,Math.PI*2/9*7.25,Math.PI*2/9*5,true) ;
            context.closePath();
            context.fill();
        }
        //风扇底座
        if(colorState[4]==1){
            context.fillStyle=colorarray[i][colorFlag[4]];
            context.beginPath();
            context.arc(80,280,75,Math.PI*2/12*7.6,Math.PI*2/12*10.00,false) ;
            context.arc(110,240.5,25,Math.PI*2/12*10.5,Math.PI*2/12*1.5,false) ;
            context.arc(80,200,75,Math.PI*2/12*2,Math.PI*2/12*4.5,false) ;
            context.arc(49,240.5,25,Math.PI*2/12*4.4,Math.PI*2/12*7.5,false) ;
            context.closePath();
            context.fill();
        }
        //风扇柱子
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            context.beginPath();
            context.arc(80,90,75,Math.PI*2/12*2.4,Math.PI*2/12*3.6,false) ;
            context.arc(80,185,40,Math.PI*2/12*4.2,Math.PI*2/12*1.8,true) ;
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整的五角星形状
     */
    "five_star":function(context,i){
            context.scale(0.6,0.6);
            context.translate(0,40);
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(90, 0);
            context.lineTo(30, 170);
            context.lineTo(180, 60);
            context.lineTo(0, 60);
            context.lineTo(150, 170);
            context.lineTo(90, 0);
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整的山形状
     */
    "mountain":function(context,i){
            context.scale(0.85,0.85);
            context.translate(0,30);
        //-----------------------大山------------------------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(95, 0);
            context.lineTo(25,140);
            context.lineTo(145, 140);
            context.lineTo(95, 0);
            context.closePath();
            context.fill();
        }
        //---------------------小山left------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.moveTo(40, 60);
            context.lineTo(0, 140);
            context.lineTo(72, 140);
            context.lineTo(40, 60);
            context.closePath();
            context.fill();
        }
        //---------------------小山right------
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.moveTo(125, 50);
            context.lineTo(72, 140);
            context.lineTo(165, 140);
            context.lineTo(125, 50);
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整的树形状
     */
    "tree":function(context,i){
            context.scale(0.7,0.7);
            context.translate(0,30);
        //---------------------树叶------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(55, 0);
            context.lineTo(20, 30);
            context.lineTo(40, 30);
            context.lineTo(10, 60);
            context.lineTo(35, 60);
            context.lineTo(0, 100);
            context.lineTo(125, 100);
            context.lineTo(75, 60);
            context.lineTo(105, 60);
            context.lineTo(70, 30);
            context.lineTo(100, 30);
            context.lineTo(55, 0);
            context.closePath();
            context.fill();
        }
        //-----------------------树干------------------------
        if(colorState[1]==1){
            context.strokeStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.lineWidth=25;
            context.moveTo(55, 100);
            context.lineTo(55, 170);
            context.closePath();
            context.stroke();
        }
    },
    /**
     *  完整的台灯形状
     */
    "tableLamp":function(context,i){
            context.scale(0.7,0.7);
            context.translate(0,40);
        //---------灯座--------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(0,150);
            context.lineTo(110,150);
            context.arc(100,145,10,Math.PI *0,Math.PI*1.5,true);
            context.arc(10,145,10,Math.PI*1.5,Math.PI*1,true);
            context.closePath();
            context.fill();
        }
        //-----------------------支座----------------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.moveTo(80,135);
            context.arc(120,65,5,Math.PI *2/12*2,Math.PI*2/12*10,true);
            context.lineTo(79,20);
            context.lineTo(72,28);
            context.arc(114,65,5,Math.PI *2/12*2,Math.PI*2/12*10,true);
            context.lineTo(68,135);
            context.closePath();
            context.fill();
        }
        //--------------------------灯罩----------------
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.arc(76,10,10,Math.PI*2/8*0.5,Math.PI*2/8*6.5,true);
            context.arc(65,0,10,Math.PI*2/8*6.5,Math.PI*2/8*4.5,true);
            context.arc(20,50,30,Math.PI*2/8*6.5,Math.PI*2/8*4.7,true);
            context.arc(32,62,30,Math.PI*2/8*1.0,Math.PI*2/8*7.2,true);
            context.closePath();
            context.fill();
        }
        //------------灯管----------------------
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            context.beginPath();
            context.arc(22,61,15,Math.PI*2/12*7.8,Math.PI*2/12*0.9,true);
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整的房子形状
     */
    "house":function(context,i){
            context.scale(0.7,0.7);
            context.translate(0,30);
        //---------------------------房子墙壁--------------
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.moveTo(15, 80);
            context.lineTo(15, 170);
            context.lineTo(115, 170);
            context.lineTo(115, 120);
            context.arc(135,120,20,Math.PI*1,Math.PI*2,false) ;
            context.lineTo(155, 120);
            context.lineTo(155, 170);
            context.lineTo(175, 170);
            context.lineTo(175, 80);
            context.lineTo(15, 80);
            context.closePath();
            context.fill();
        }
        //------------屋顶 ------------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(100, 0);
            context.lineTo(0, 80);
            context.lineTo(190, 80);
            context.lineTo(100, 0);
            context.closePath();
            context.fill();
        }
        //------------屋顶烟囱------------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.moveTo(164, 58);
            context.lineTo(164, 32);
            context.lineTo(136, 32);
            context.lineTo(164, 58);
            context.closePath();
            context.fill();
        }
        //--------------------------窗子left----------
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            context.fillRect(28,125,30,30);
            context.beginPath();
            context.arc(43,120,15,Math.PI*1,Math.PI*2,false);
            context.closePath();
            context.fill();
        }
        //--------------------------窗子right----------
        if(colorState[4]==1){
            context.fillStyle=colorarray[i][colorFlag[4]];
            context.fillRect(72,125,30,30);
            context.beginPath();
            context.arc(87,120,15,Math.PI*1,Math.PI*2,false);
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整红绿灯的形状
     */
    "trafficLights":function(context,i){
        context.scale(0.3,0.3);
        context.translate(0,60);
//        // --------灯顶-------------------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.moveTo(0,30);
            context.lineTo(200,30);
            context.lineTo(200,00);
            context.arc(100,65,110,Math.PI*2/12*10.57,Math.PI*2/12*7.43,true) ;
            context.lineTo(0,0);
            context.closePath();
            context.fill();
        }
       //---------------灯体----------- --------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.moveTo(10,20);
            context.arc(40,290,30,Math.PI*1,Math.PI*0.5,true) ;
            context.arc(160,290,30,Math.PI*0.5,Math.PI*0,true);
            context.lineTo(190,20);
            context.closePath();
            context.fill();
        }
//        //-----------------上灯--------------
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.arc(100,70,40,0.,Math.PI*2,false) ;
            context.closePath();
            context.fill();
        }
//        //---------------下灯----------
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            context.beginPath();
            context.arc(100,165,40,0,Math.PI*2,false) ;
            context.closePath();
            context.fill();
        }
//        //--------------------------中灯-------
        if(colorState[4]==1){
            context.fillStyle=colorarray[i][colorFlag[4]];
            context.beginPath();
            context.arc(100,260,40,0,Math.PI*2,false) ;
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整电视的形状
     */
    "tv":function(context,i){
            context.scale(0.7,0.7);
            context.translate(0,60);
        //=---------------------------外壳-------------------------
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.arc(0,0,10,Math.PI*1,Math.PI*1.5,false);
            context.arc(100,0,10,Math.PI*1.5,Math.PI*2,false);
            context.arc(100,120,10,Math.PI*0,Math.PI*0.5,false);
            context.arc(0,120,10,Math.PI*0.5,Math.PI*1,false);
            context.closePath();
            context.fill();
        }
        //=---------------------------屏幕-------------------------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.arc(15,15,10,Math.PI*1,Math.PI*1.5,false);
            context.arc(85,15,10,Math.PI*1.5,Math.PI*2,false);
            context.arc(85,80,10,Math.PI*0,Math.PI*0.5,false);
            context.arc(15,80,10,Math.PI*0.5,Math.PI*1,false);
            context.closePath();
            context.fill();
        }
        //=---------------------------开关-------------------------
        if(colorState[2]==1){
            context.fillStyle=colorarray[i][colorFlag[2]];
            context.beginPath();
            context.arc(15,110,5,Math.PI*0,Math.PI*2,false);
            context.closePath();
            context.fill();
            context.beginPath();
            context.arc(30,110,5,Math.PI*0.5,Math.PI*1.5,false);
            context.arc(85,110,5,Math.PI*1.5,Math.PI*0.5,false);
            context.fill();
        }
        //=---------------------------底座-------------------------
        if(colorState[3]==1){
            context.fillStyle=colorarray[i][colorFlag[3]];
            context.beginPath();
            context.moveTo(0,130);
            context.lineTo(100,130);
            context.arc(100,140,5,Math.PI*0,Math.PI*0.5,false);
            context.arc(0,140,5,Math.PI*0.5,Math.PI*1,false);
            context.closePath();
            context.fill();
        }
    },
    /**
     *  完整苹果公司Logo的形状
     */
    "apple":function(context,i){
        context.scale(0.4,0.4);
        context.translate(0,10);
        // ----------------------苹果 叶子
        if(colorState[0]==1){
            context.fillStyle=colorarray[i][colorFlag[0]];
            context.beginPath();
            context.arc(48,50,50,Math.PI*2/12*11.9,Math.PI*2/12*2.9,false);
            context.fill();
            context.closePath();
            context.beginPath();
            context.arc(101,98,50,Math.PI*2/12*5.9,Math.PI*2/12*8.9,false);
            context.fill();
            context.closePath();
        }
        //------------------------------苹果--------------------
        if(colorState[1]==1){
            context.fillStyle=colorarray[i][colorFlag[1]];
            context.beginPath();
            context.arc(52,102,20,Math.PI*2/12*1,Math.PI*2/12*4.5,false);
            context.arc(0,163,60,Math.PI*2/12*9.8,Math.PI*2/12*6,true);
            context.arc(89,180,150,Math.PI*2/12*6.3,Math.PI*2/12*4.3,true);
            context.arc(23,271,38,Math.PI*2/12*5,Math.PI*2/12*2,true);
            context.arc(52,299,16,Math.PI*2/12*12,Math.PI*2/12*6,true);
            context.arc(81,271,38,Math.PI*2/12*4,Math.PI*2/12*1,true);
            context.arc(14,180,150,Math.PI*2/12*1.7,Math.PI*2/12*0.4,true);
            context.arc(158,160,46,Math.PI*2/12*3.25,Math.PI*2/12*8.0,false);
            context.arc(104,163,60,Math.PI*2/12*10.4,Math.PI*2/12*7.6,true);
            context.fill();
            context.closePath();
        }
    }
}
