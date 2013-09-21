
function $(eve){
    return document.getElementById(eve)
}

//------------时间控制器
var gameTime=0;
var allCtrl=null;

var target=$("content");
/**
 * 游戏开始
 */
function gameStart(){
    var backFlag=true;
    if(flag==true){
        backgroundTiled();
    }
    if(gameTime%2000==0){
        level++;
        if(level>=4){
            level=4;
        }
    }
    moveShape();
    //------------判断图片是否被完全清除
    for(var i=0;i<5;i++){
        if(colorState[i]==1){
            backFlag=false;
        }
    }
    if(backFlag==true){
        clearScale();
        moveX=999;
        for(var k=0;k<5;k++){
            colorState[i]=1;
        }
        changeLevel();
    }
    //----------------------------------------
    gameTime++;
    if(gameTime*7<1000){
        $("score").innerHTML=gameTime*7;
    }else if(gameTime*7<1000000){
        $("score").innerHTML=eval(parseInt(gameTime*7/1000))+","+eval(gameTime*7%1000);
    }else if(gameTime*7<1000000000){
        $("score").innerHTML=eval(parseInt(gameTime*7/1000000))+","+eval(parseInt(gameTime*7%1000000/1000))+","+eval(gameTime*7%1000000%1000);
    }
}

/**
 *   游戏暂停
 */
function pauseGame(){
    clearInt();
    Dialog.alert(3,[]);
}

function clearInt(){
    clearInterval(allCtrl);
}
//颜色数组
var colorarray=new Array();
colorarray[0]=new Array;
colorarray[0]=["orange","#F15114","#9351DF","#F9B7C0","#5AC396","#F8E677","#7cb8e7","#bae3a3","#f997e0","#DCDCDC","#FF78E4"];
colorarray[1]=new Array;
colorarray[1]=["#FF78E4","#DCDCDC","#f997e0","#bae3a3","#7cb8e7","#F8E677","#5AC396","#F9B7C0","#9351DF","#F15114","orange"];

//--------------------图片状态数组---------------------
var colorState=new Array();
//----------------图片个数---------------------------
var imgNum=-1;
//------------------点对颜色总数-----------
var imgColorNum=0;
for(var i=0;i<5;i++){
    colorState[i]=1;
}

//----------------------变化图片及其颜色变化参数------------------
//图片选择参数
var changeImage=0;
//图片颜色临时存放数组
var colorFlag=new Array();
//控制移动横坐标参数初始化
var moveX=999;
//图片平移参数初始化---
var x_move=-2;
//背景扩散状态参数
var flag=false;
//------------颜色数组下标------------
var colorRank=0;
/**
 *点击颜色调用背景平铺函数
 */
var canvasBg=$("myCanvasBackground");
var contextBg=canvasBg.getContext("2d");
var colorR=0;
var colorNumber=10;
function backgroundTiled(){
    var imgFlag=true;
    contextBg.fillStyle=colorarray[colorRank][colorNumber];
    contextBg.beginPath();
    if(colorR+205>=moveX){
        for(var i=0;i<5;i++){
            if(colorFlag[i]==colorNumber){
                colorState[i]=0;
            }
        }
        //------------------------判断该图片是否被完全删除--------
        for(var i=0;i<5;i++){
            if(colorState[i]==1){
                imgFlag=false;
                break;
            }
        }
        clearScale();
        if(!imgFlag){
            selectShape();
        }
    }
    if(colorR>=1200){
        colorR=0;
        flag=false;
        return;
    }
    contextBg.arc(155, 300,colorR,0,6.28,false);
    colorR+=100;
    contextBg.closePath();
    contextBg.fill();
}

//-------------------图形的移动----------------------//

function moveShape(){
 var canvas=$("myCanvas");
  if(moveX<=0){
      moveX=999;
  }
  canvas.style.left=moveX+"px";
  moveX+=x_move;
    if(moveX<=145){
        clearInt();
        getBestScore();
        getPlayerGolds();
        Dialog.alert(1,[gameTime*7,imgNum,imgColorNum,eval(gameTime*7+imgColorNum*10+imgNum*100),imgNum*100]);
      // alert("GAME OVER!总金币为："+imgNum+"点对颜色总数为:"+imgColorNum+"总分为："+eval(gameTime*20+imgColorNum*110));
  }
}

//-----------------图形的选择----------------//
function selectShape(){
//---------------获取画布对象 ----------
    var canvas=$("myCanvas");
    var context=canvas.getContext("2d");
    context.translate(50,0);
    switch(changeImage){
        //-----------完整的安卓形状---------------
        case 0:Shape.android(context,colorRank); break;

        //-------------------------- 完整的电风扇形状------------------------
        case 1:Shape.fan(context,colorRank);break;

        //-------------------------完整五角星图形-----------------------
        case 2:Shape.five_star(context,colorRank);break;

        //-------------------------- 完整的山形状------------------------
        case 3:Shape.mountain(context,colorRank);break;

        //-------------------------- 点击上边颜色的树形状------------------------
        case 4:Shape.tree(context,colorRank);break;

        //-------------------------- 完整的台灯形状------------------------
        case 5:Shape.tableLamp(context,colorRank);break;

        //-------------------------- 完整房子------------------------
        case 6:Shape.house(context,colorRank);break;

        //-------------------------- 红绿灯------------------------
        case 7:Shape.trafficLights(context,colorRank);break;

        //-------------------------- 电视------------------------
        case 8:Shape.tv(context,colorRank);break;

        //-------------------------- 苹果logo------------------------
        case 9:Shape.apple(context,colorRank);break;
    }
}

//--------------------------色块div的创建--------------------------------
function colorDiv(start,num,imgRank){
    var objdiv=$("color");
    var content="";
    switch (num){
        case 2:for(var i=0;i<5;i++){
            colorFlag[i]=start;
        }
            //随机色块
            var rank;
            for(var j=0;j>=0;j++){
                rank=parseInt(Math.random()*10);
                if(rank!=start){
                    break;
                }
            }
            //色块数组
            var color=new Array(2);
            var n=parseInt(Math.random()*2);
            color[n]=colorNumber;
            for(var k=0;k<2;k++){
                if(k!=n){
                    color[k]=start;
                }
                content+="<div onclick='changeColor("+color[k]+")' class='color_div"+k+"' style='height:100%;display:inline-block;width:"+
                    100/(num)+"%;background-color: "+colorarray[colorRank][color[k]]+"'></div>" ;
            }
            break;
        case 3:colorFlag[0]=start;
            colorFlag[1]=start+1;
            colorFlag[2]=start;
            colorFlag[3]=start+1;
            colorFlag[4]=start;
            //-------------------调用创建数组函数
            content=createDiv(start,num);
            //-------------图片颜色选择-------------
            var imgColor;
            switch (imgRank){
                case 1:imgColor=colorFlag[parseInt(Math.random()*2)];
                    for(var i=0;i<5;i++){
                        colorFlag[i]=imgColor;
                    }
                    break;
            }
            break;
        case 4:colorFlag[0]=start;
            colorFlag[1]=start+1;
            colorFlag[2]=start+2;
            colorFlag[3]=start;
            colorFlag[4]=start+1;
            //-------------------调用创建数组函数
            content=createDiv(start,num);
            //-------------图片颜色选择-------------
            var imgColor;
            switch (imgRank){
                case 1:imgColor=colorFlag[parseInt(Math.random()*3)];
                    for(var i=0;i<5;i++){
                        colorFlag[i]=imgColor;
                    }
                    break;
                case 2:imgColor=parseInt(Math.random()*2);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img0;
                    colorFlag[3]=img1;
                    colorFlag[4]=img0;
                    break;
            }
            break;
        case 5:colorFlag[0]=start;
            colorFlag[1]=start+1;
            colorFlag[2]=start+2;
            colorFlag[3]=start+3;
            colorFlag[4]=start;
            //-------------------调用创建数组函数
            content=createDiv(start,num);
            //-------------图片颜色选择-------------
            var imgColor;
            switch (imgRank){
                case 1:imgColor=colorFlag[parseInt(Math.random()*4)];
                    for(var i=0;i<5;i++){
                        colorFlag[i]=imgColor;
                    }
                    break;
                case 2:imgColor=parseInt(Math.random()*3);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img0;
                    colorFlag[3]=img1;
                    colorFlag[4]=img0;
                    break;
                case 3:imgColor=parseInt(Math.random()*2);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    var img2=colorFlag[imgColor+2];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img2;
                    colorFlag[3]=img0;
                    colorFlag[4]=img1;
                    break;
            }
            break;
        case 6:colorFlag[0]=start;
            colorFlag[1]=start+1;
            colorFlag[2]=start+2;
            colorFlag[3]=start+3;
            colorFlag[4]=start+4;
            //-------------------调用创建数组函数
            content=createDiv(start,num);
            //-------------图片颜色选择-------------
            var imgColor;
            switch (imgRank){
                case 1:imgColor=colorFlag[parseInt(Math.random()*5)];
                    for(var i=0;i<5;i++){
                        colorFlag[i]=imgColor;
                    }
                    break;
                case 2:imgColor=parseInt(Math.random()*4);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img0;
                    colorFlag[3]=img1;
                    colorFlag[4]=img0;
                    break;
                case 3:imgColor=parseInt(Math.random()*3);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    var img2=colorFlag[imgColor+2];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img2;
                    colorFlag[3]=img0;
                    colorFlag[4]=img1;
                    break;
                case 4:imgColor=parseInt(Math.random()*2);
                    var img0=colorFlag[imgColor];
                    var img1=colorFlag[imgColor+1];
                    var img2=colorFlag[imgColor+2];
                    var img3=colorFlag[imgColor+3];
                    colorFlag[0]=img0;
                    colorFlag[1]=img1;
                    colorFlag[2]=img2;
                    colorFlag[3]=img3;
                    colorFlag[4]=img0;
                    break;
            }
            break;
    }
    objdiv.innerHTML=content;
    selectShape();
}
//-------------------------色块创建调用函数-------------

function createDiv(start,num){
    //随机色块
    var rank;
    for(var j=0;j>=0;j++){
        rank=parseInt(Math.random()*10);
        if(rank<start ||rank>start+num-1&&rank!=colorNumber){
            break;
        }
    }
    for(var i=0;i<5;i++){
        if(colorFlag[i]==colorNumber){
            colorFlag[i]=rank;
        }
    }
    //-----------------色块数组----
    var color=new Array(num);
    var content="";
    var n=parseInt(Math.random()*num);
    color[n]=colorNumber;
    for(var k=0;k<num;k++){
        if(k<n){
            color[k]=colorFlag[k];
        }
        if(k>n){
            color[k]=colorFlag[k-1];
        }
        content+="<div onclick='changeColor("+color[k]+")'class='color_div"+k+"' style='height:100%;display:inline-block;width:"+
            100/(num)+"%;background-color: "+colorarray[colorRank][color[k]]+"'></div>" ;
    }
    return content;
}
//-----------------图形缩放的清除的选择----------------//
function clearScale(){
    var canvas=$("myCanvas");
    var content=$("myFather");
    content.removeChild(canvas);
    content.innerHTML="<canvas id='myCanvas' width='200' height='200'></canvas>";
}

//-----------------------------------------------改变背景颜色-----------------------------

function changeColor(j){
    colorNumber=j;
    //---------------判断颜色是否为图片颜色----------
    var status=false;
    for(var i=0;i<5;i++){
       if(colorFlag[i]==j){
           status=true;
       }
    }
    flag=true;
    if(status==false){
        clearInt();
        getBestScore();
        getPlayerGolds();
        setTimeout(function(){
            Dialog.alert(1,[gameTime*7,imgNum,imgColorNum,eval(gameTime*7+imgColorNum*10+imgNum*100),imgNum*100]);
            //alert("GAME OVER!总金币为："+imgNum+"点对颜色总数为:"+imgColorNum+"总分为："+eval(gameTime*20+imgColorNum*10));
        },300);
    }
    else{
        //----------------------选对颜色总个数---------------
        imgColorNum+=1;
    }
}
//-----------------------------------游戏等级选择-----------------------
var level=0;
function changeLevel(){
    //----------------------------选对图片总个数
    imgNum+=1;
    //-------------------图片起始颜色-选择参数---------
    var rank;
    //-----------------图片随机选择参数 --------
    var rankImage;
    //-------------------每次出现的图片颜色总数参数---------
    var colorNumRank=1;
    //----------每次出现几个色块参数---------
    var colorNum;
    //----------每次图片出现最多出的颜色参数---------
    var colorMax=1;
    //-----------------数组颜色随机选择参数----
    colorRank=parseInt(Math.random()*2);
    switch (level){
        //-----------------------------简单-----------
        case 0:rank=parseInt(Math.random()*10);
            colorNum=2;
            colorMax=1;
            x_move=-2;
            break;
        //-----------------------------普通-----------
        case 1:rank=parseInt(Math.random()*9);
            colorNum=3;
            colorMax=2;
            x_move=-3;
            break;
        //-----------------------------困难-----------
        case 2:rank=parseInt(Math.random()*8);
            colorNum=4;
            colorMax=3;
            x_move=-3;
            break;
        //-----------------------------大师-----------
        case 3:rank=parseInt(Math.random()*7);
            colorNum=5;
            colorMax=4;
            x_move=-3;
            break;
        //-----------------------------深渊-----------
        case 4:rank=parseInt(Math.random()*6);
            colorNum=6;
            colorMax=5;
            x_move=-4;
            break;
    }
    //----------------------图片的随机选择------
    var array=[0,1,2,3,4,5,6,7,8,9];
    rankImage=array[parseInt(Math.random()*10)];
    changeImage=rankImage;
    //-------------创建色块和调用创建图片
    switch (rankImage){
        case 2:colorNumRank=1;break;
        case 4:;
        case 9:colorNumRank=parseInt(Math.random()*2)+1;break;
        case 3:colorNumRank=parseInt(Math.random()*3)+1; break;
        case 5: case 8:colorNumRank=parseInt(Math.random()*4)+1;break;
        case 0:;case 1:;case 6:;case 7:colorNumRank=parseInt(Math.random()*5)+1;break;
    }
    if(colorNumRank>colorMax){
        colorNumRank=colorMax;
    }
    colorDiv(rank,colorNum,colorNumRank);
    //----------------图片状态初始化-------
    for(var i=0;i<5;i++){
        colorState[i]=1;
    }
}
document.oncontextmenu=function(){
    return false;
}
document.ondragstart=function(){
    return false;
}
document.onselectstart=function(){
    return false;
}

