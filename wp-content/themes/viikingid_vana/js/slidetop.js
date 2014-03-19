/**********************************************
*greetings to http://javascripts.vbarsan.com/ *
*	modified by Aleksander Andre	      *
***********************************************/	
var swidth=750;
var sheight=195;
var sspeed=1.5;
var restart=sspeed;
var rspeed=sspeed;
var scolor="";
var imagef='';
allpics=["./wp-content/themes/viikingid_vana/img/teine41.jpg","./wp-content/themes/viikingid_vana/img/teine.jpg","./wp-content/themes/viikingid_vana/img/teine41.jpg"];
var preloadpics = new Array();
for(qq=0;qq<allpics.length;qq++){
preloadpics[qq]=new Image();
preloadpics[qq].src=allpics[qq];}
var leftimage=new Array();
leftimage[0]='<img class="slide" src='+preloadpics[0].src+' alt="Viikingite küla" height=400 width=750>';
leftimage[1]='<img class="slide" src='+preloadpics[1].src+' alt="Viikingite küla" height=400 width=750>';
leftimage[2]='<img class="slide" src='+preloadpics[2].src+' alt="Viikingite küla" height=400 width=750>';
for(mi=leftimage.length-1;mi>=0;mi--)
imagef=imagef+leftimage[mi]+'<br>';
function start(){if(document.getElementById){tdiv6=document.getElementById('slider');tdiv6.innerHTML=imagef;thel=tdiv6.offsetHeight;tdiv6.style.top=-thel+"px";slidens6();}
else if(document.all){tdivie=slider;tdivie.innerHTML=imagef;thel=tdivie.offsetHeight;tdivie.style.pixelTop=-thel+"px";slideie();}else if(document.layers){tdivns4=document.slider1.document.slider2;tdivns4.document.write(imagef);tdivns4.document.close();thel=tdivns4.document.height;tdivns4.top=-thel;slidens4();}}
function slidens4(){if(tdivns4.top<=sheight){tdivns4.top+=sspeed;setTimeout("slidens4()",100);}else{tdivns4.top=-thel;slidens4();}}
function slideie(){if(tdivie.style.pixelTop<=sheight){tdivie.style.pixelTop+=sspeed+"px";setTimeout("slideie()",100);}else{tdivie.style.pixelTop=-thel+"px";slideie();}}
function slidens6(){if(parseInt(tdiv6.style.top)<=sheight){tdiv6.style.top=parseInt(tdiv6.style.top)+sspeed+"px";setTimeout("slidens6()",100);}else{tdiv6.style.top=-thel+"px";slidens6();}}