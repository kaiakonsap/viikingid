/*
Licencov�?no pod MIT Licencí

© 2008 Seznam.cz, a.s.

Tímto se uděluje bezúplatn�? nevýhradní licence k� opr�?vnění užívat Software,
časově i místně neomezen�?, v� souladu s� příslu�?nými ustanoveními autorského z�?kona.

Nabyvatel/uživatel, který obdržel kopii tohoto softwaru a dal�?í přidružené 
soubory (d�?le jen „software“) je opr�?vněn k� nakl�?d�?ní se softwarem bez 
jakýchkoli omezení, včetně bez omezení pr�?va software užívat, pořizovat si 
z� něj kopie, měnit, sloučit, �?ířit, poskytovat zcela nebo zč�?sti třetí osobě 
(podlicence) či prod�?vat jeho kopie, za n�?sledujících podmínek:

- vý�?e uvedené licenční ujedn�?ní musí být uvedeno na v�?ech kopiích nebo 
podstatných souč�?stech Softwaru.

- software je poskytov�?n tak jak stojí a leží, tzn. autor neodpovíd�? 
za jeho vady, jakož i možné n�?sledky, ledaže věc nem�? vlastnost, o níž autor 
prohl�?sí, že ji m�?, nebo kterou si nabyvatel/uživatel výslovně vymínil.



Licenced under the MIT License

Copyright (c) 2008 Seznam.cz, a.s.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/{SZN.LightBox=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox","VERSION":"1.0","CLASS":"class","IMPLEMENT":[SZN.SigInterface,SZN.Components]});SZN.LightBox.DIR_PREV=-1;SZN.LightBox.DIR_NEXT=1;SZN.LightBox.prototype.$constructor=function(data,optObj){this.options={"components":{"anchorage":SZN.LightBox.Anchorage,"main":SZN.LightBox.Main,"strip":SZN.LightBox.Strip,"description":SZN.LightBox.Description,"pageShader":SZN.LightBox.PageShader,"navigation":SZN.LightBox.Navigation,"transition":SZN.LightBox.Transition,"others":[]},"imagePath":"img/","imageFormat":"png","parent":false,"zIndex":false,"useShadow":false,"usePageShader":true,"shadowSizes":[16,16,16,16],"galleryId":false,"galleryClassName":"image-browser-content","handleDocumentCloseClick":true,"mainOpt":{"id":false,"className":"image-browser-image","useMouseWheelScroll":true},"stripOpt":{"id":false,"className":"image-browser-thumbs","orientation":"vertical","activeBorder":"inner","activeId":false,"activeClassName":"image-browser-active","imageBoxClassName":"image-browser-thumb-box"},"descriptionOpt":{"id":false,"className":"image-browser-caption","contentId":false,"contentClassName":"image-browser-caption-content"},"navigationOpt":{"id":false,"className":"image-browser-navigation","continuous":true,"showDisabled":false,"nextClassName":"image-browser-next","prevClassName":"image-browser-prev","closeClassName":"image-browser-close"},"transitionOpt":{},"anchorageOpt":{}};for(var p in optObj){if(optObj[p] instanceof Object&&!optObj[p].CLASS){for(var o in optObj[p]){this.options[p][o]=optObj[p][o];}}else{this.options[p]=optObj[p];}}this.dom={};this.ec=[];this.objCache=[];this.components=[];this.visible=false;this.index=0;this.direction=SZN.LightBox.DIR_NEXT;this.blindLinkName=SZN.idGenerator();this.blindStyle={"position":"absolute","top":"-1000px","left":"-1000px","width":"1px","height":"1px","overflow":"hidden"};this.data=[];for(var i=0;i<data.length;i++){var item=data[i];var o={};for(var j in item){o[j]=item[j];}if(item.main){this.index=i;}this.data.push(o);}this._buildContainer();this._renderBlindStart();this._render();for(var i=0;i<this.options.components.others.length;i++){this.addNewComponent(this.options.components.others[i]);}this.addNewComponent({"name":"dummyTransition","part":SZN.LightBox.Transition});this._renderBlindEnd();};SZN.LightBox.create=function(elm,optObj){elm=SZN.gEl(elm);var data=[];var l=[];var links=elm.getElementsByTagName("a");for(var i=0;i<links.length;i++){var img=links[i].getElementsByTagName("img")[0];if(!img){continue;}data.push({"alt":links[i].alt,"small":{"url":img.src},"big":{"url":links[i].href}});l.push(links[i]);}var g=new SZN.LightBox(data,optObj);for(var i=0;i<l.length;i++){g.bindElement(l[i],i);}return g;};SZN.LightBox.prototype.$destructor=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}this.callChildDestructor();for(var p in this){this[p]=null;}};SZN.LightBox.prototype._addDefaultComponent=function(name,part,className){var node=part;var ok=false;while(node){if(node==className){ok=true;break;}node=node.EXTEND;}if(ok){this.addNewComponent({"part":part,"name":name});}else{alert("Bad "+name+" functionality");}};SZN.LightBox.prototype._buildContainer=function(){this.dom.loadBox=SZN.cEl("div");this.dom.loadBox.style.position="absolute";this.dom.loadBox.style.top="-100px";this.dom.loadBox.style.left="-100px";this.dom.loadBox.style.overflow="hidden";this.dom.loadBox.style.width="1px";this.dom.loadBox.style.height="1px";var body=document.getElementsByTagName("body")[0];body.insertBefore(this.dom.loadBox,body.firstChild);var div=SZN.cEl("div",this.options.galleryId,this.options.galleryClassName);if(this.options.useShadow){var winopts={"imagePath":this.options.imagePath,"imageFormat":this.options.imageFormat,"sizes":this.options.shadowSizes};this.window=new SZN.Window(winopts);this.dom.container=this.window.container;this.dom.container.style.position="absolute";this.window.content.appendChild(div);this.dom.content=div;}else{this.dom.container=SZN.cEl("div",false,false,{"position":"absolute"});this.dom.container.appendChild(div);this.dom.content=div;}if(this.options.zIndex){this.dom.container.style.zIndex=this.options.zIndex;}if(!this.parent){var parent=this.dom.loadBox;}else{var parent=this.parent;}parent.insertBefore(this.dom.container,parent.firstChild);};SZN.LightBox.prototype._render=function(){this._addDefaultComponent("anchorage",this.options.components.anchorage,SZN.LightBox.Anchorage);this._addDefaultComponent("transition",this.options.components.transition,SZN.LightBox.Transition);this._addDefaultComponent("main",this.options.components.main,SZN.LightBox.Main);this.dom.content.appendChild(this.main.render());if(this.options.usePageShader){this._addDefaultComponent("pageShader",this.options.components.pageShader,SZN.LightBox.PageShader);}this._addDefaultComponent("strip",this.options.components.strip,SZN.LightBox.Strip);this.dom.content.appendChild(this.strip.render());this._addDefaultComponent("description",this.options.components.description,SZN.LightBox.Description);this.dom.content.appendChild(this.description.render());this._addDefaultComponent("navigation",this.options.components.navigation,SZN.LightBox.Navigation);this.dom.content.appendChild(this.navigation.render());this.makeEvent("renderDone","public");};SZN.LightBox.prototype._renderBlindStart=function(){var h3=SZN.cEl("h3");h3.innerHTML="Fotogalerie";SZN.Dom.setStyle(h3,this.blindStyle);var link=SZN.cEl("a");link.href="#"+this.blindLinkName;link.innerHTML="Přeskočit fotogalerii";SZN.Dom.setStyle(link,this.blindStyle);this.dom.content.appendChild(h3);this.dom.content.appendChild(link);};SZN.LightBox.prototype._renderBlindEnd=function(){var link=SZN.cEl("a");link.id=this.blindLinkName;this.dom.content.appendChild(link);};SZN.LightBox.prototype._addEvents=function(){if(this.options.handleDocumentCloseClick){this.ec.push(SZN.Events.addListener(document,"mousedown",this,"_clickClose"));this.ec.push(SZN.Events.addListener(this.dom.container,"mousedown",window,SZN.Events.stopEvent));}this.ec.push(SZN.Events.addListener(window,"resize",this,"_resize"));};SZN.LightBox.prototype._removeEvents=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}};SZN.LightBox.prototype.createEvent=function(sender,name){this.makeEvent(name,"public",{"sender":sender});};SZN.LightBox.prototype._resize=function(e,elm){this.makeEvent("windowResize","protected");};SZN.LightBox.prototype._clickClose=function(e,elm){if(e.button==SZN.Browser.mouse.left){this.close();}};SZN.LightBox.prototype.close=function(){this.makeEvent("close","public");this._removeEvents();this.visible=false;if(!this.parent){SZN.Dom.elementsHider(this.dom.container,false,"show");this.dom.container.parentNode.removeChild(this.dom.container);}this.makeEvent("closed","public");};SZN.LightBox.prototype.show=function(i){this.makeEvent("show","public",{"index":i});this._addEvents();this.visible=true;if(!this.parent){var body=document.getElementsByTagName("body")[0];body.insertBefore(this.dom.container,body.firstChild);this.anchorage.actualizePosition();SZN.Dom.elementsHider(this.dom.container,false,"hide");}this.go(i);this.makeEvent("showed","public",{"index":i});};SZN.LightBox.prototype.go=function(index){var dir=index<this.index?SZN.LightBox.DIR_PREV:SZN.LightBox.DIR_NEXT;this._go(index,dir);};SZN.LightBox.prototype._go=function(i,direction){this.direction=direction;this.makeEvent("go","public",{"index":i});this.main.update(i);this.strip.update(i);this.description.update(i);this.navigation.update(i);this.index=i;};SZN.LightBox.prototype.previous=function(){var i=this.index-1;if(i<0){if(this.options.navigationOpt.continuous){i=this.data.length-1;}else{return;}}this._go(i,SZN.LightBox.DIR_PREV);};SZN.LightBox.prototype.next=function(){var i=this.index+1;if(i==this.data.length){if(this.options.navigationOpt.continuous){i=0;}else{return;}}this._go(i,SZN.LightBox.DIR_NEXT);};SZN.LightBox.prototype.bindAnchors=function(elm){var links=SZN.Dom.arrayFromCollection(SZN.gEl(elm).getElementsByTagName("a"));for(var i=0;i<links.length;i++){this.bindElement(links[i],i);}};SZN.LightBox.prototype.bindElement=function(elm,i){this.objCache.push(new SZN.LightBox.ImageLink(this,i,elm));};SZN.LightBox.ImageLink=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.ImageLink","VERSION":"1.0","CLASS":"class"});SZN.LightBox.ImageLink.prototype.$constructor=function(owner,index,elm){this.ec=[];this.owner=owner;this.index=index;this.elm=elm;this.ec.push(SZN.Events.addListener(this.elm,"click",this,"_show"));};SZN.LightBox.ImageLink.prototype.$destructor=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}for(var p in this){this[p]=null;}};SZN.LightBox.ImageLink.prototype._show=function(e,elm){SZN.Events.cancelDef(e);SZN.Events.stopEvent(e);this.owner.show(this.index);};SZN.LightBox.Anchorage=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Anchorage","VERSION":"1.0","CLASS":"class"});SZN.LightBox.Anchorage.prototype.$constructor=function(owner){this.owner=owner;this.options=this.owner.options.anchorageOpt;this.container=this.owner.dom.container;};SZN.LightBox.Anchorage.prototype.actualizePosition=function(){this.container.style.top="0px";this.container.style.left="0px";this.container.style.position="absolute";};SZN.LightBox.Anchorage.Fixed=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Anchorage.Fixed","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Anchorage});SZN.LightBox.Anchorage.Fixed.prototype.$constructor=function(owner){this.callSuper("$constructor",arguments.callee)(owner);this.ec=[];this.useAbsoluteHack=false;if(SZN.Browser.client=="ie"&&SZN.Browser.version<=6){this.useAbsoluteHack=true;}this.attachEvents();};SZN.LightBox.Anchorage.Fixed.prototype.$destructor=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}for(var p in this){this[p]=null;}};SZN.LightBox.Anchorage.Fixed.prototype.attachEvents=function(){this.ec.push(SZN.Events.addListener(window,"resize",this,"actualizePosition"));if(this.useAbsoluteHack){this.ec.push(SZN.Events.addListener(window,"scroll",this,"actualizePosition"));}};SZN.LightBox.Anchorage.Fixed.prototype.actualizePosition=function(){var hasParent=true;if(!this.owner.visible){this.container.style.position="absolute";this.container.style.top="-1000px";this.container.style.left="-1000px";this.container.style.visibility="hidden";hasParent=false;}var body=document.getElementsByTagName("body")[0];body.insertBefore(this.container,body.firstChild);this._position();if(!hasParent){this.container.parentNode.removeChild(this.container);this.container.style.visibility="visible";}};SZN.LightBox.Anchorage.Fixed.prototype._position=function(){var portSize=SZN.Dom.getDocSize();if(this.useAbsoluteHack){var wScroll=SZN.Dom.getScrollPos();this.container.style.position="absolute";this.container.style.top=Math.round(wScroll.y+portSize.height/2-this.container.offsetHeight/2)+"px";this.container.style.left=Math.round(wScroll.x+portSize.width/2-this.container.offsetWidth/2)+"px";}else{this.container.style.position="fixed";this.container.style.top=Math.round(portSize.height/2-this.container.offsetHeight/2)+"px";this.container.style.left=Math.round(portSize.width/2-this.container.offsetWidth/2)+"px";}};SZN.LightBox.Anchorage.TopLeft=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Anchorage.TopLeft","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Anchorage});SZN.LightBox.Anchorage.TopLeft.prototype.actualizePosition=function(){this.container.style.top=this.options.top+"px";this.container.style.left=this.options.left+"px";this.container.style.position="absolute";};SZN.LightBox.Main=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Main","VERSION":"1.0","CLASS":"class","IMPLEMENT":[SZN.SigInterface]});SZN.LightBox.Main.prototype.$constructor=function(owner){this.owner=owner;this.options=this.owner.options.mainOpt;this.dom={};this.ec=[];this.current=null;this.width=0;this.height=0;};SZN.LightBox.Main.prototype.$destructor=function(){for(p in this.dom){this.dom[p]=null;}for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}for(p in this){this[p]=null;}};SZN.LightBox.Main.prototype.render=function(){this.dom.mainBox=SZN.cEl("div",this.options.id,this.options.className);this._attachEvents();return this.dom.mainBox;};SZN.LightBox.Main.prototype._attachEvents=function(){if(this.options.useMouseWheelScroll){this.ec.push(SZN.Events.addListener(this.dom.mainBox,"DOMMouseScroll",this,"_scroll"));this.ec.push(SZN.Events.addListener(this.dom.mainBox,"mousewheel",this,"_scroll"));}};SZN.LightBox.Main.prototype._scroll=function(e,elm){SZN.Events.cancelDef(e);var delta=e.wheelDelta||e.detail;if(SZN.Browser.client=="gecko"){delta=-delta;}if(delta>0){this.owner.previous();}else{this.owner.next();}};SZN.LightBox.Main.prototype.update=function(i){this.width=parseInt(this.dom.mainBox.clientWidth);this.height=parseInt(this.dom.mainBox.clientHeight);var imgObj=this.owner.data[i];if(imgObj.flash){this._generateFlashElm(imgObj);}else{this._generateImgElm(imgObj);}};SZN.LightBox.Main.prototype._generateFlashElm=function(img){var em=SZN.cEl("embed");em.setAttribute("quality","high");em.setAttribute("pluginspage","http://www.macromedia.com/go/getflashplayer");em.setAttribute("type","application/x-shockwave-flash");em.setAttribute("width",img.width?img.width:this.width);em.setAttribute("height",img.height?img.height:this.height);em.setAttribute("allowfullscreen","true");em.setAttribute("src",img.big.url);em.setAttribute("flashvars",img.flash);em.style.visibility="hidden";this.dom.mainBox.appendChild(em);this._switchImages(em);};SZN.LightBox.Main.prototype._generateImgElm=function(img){var em=SZN.cEl("img");em.style.visibility="hidden";em.src=img.big.url;this.dom.mainBox.appendChild(em);this._switchImages(em);};SZN.LightBox.Main.prototype._switchImages=function(newImg){var c=this.current;this.current=newImg;var cName=(c?c.nodeName.toLowerCase():false);var newImgName=(newImg?newImg.nodeName.toLowerCase():false);if(cName=="embed"||newImgName=="embed"){this.owner.dummyTransition.start(c,newImg);}else{this.owner.transition.start(c,newImg);}};SZN.LightBox.Main.Scaled=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Main.Scaled","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Main});SZN.LightBox.Main.Scaled.prototype._generateImgElm=function(img){var em=SZN.cEl("img");em.height=this.height;em.width=this.width;em.style.visibility="hidden";em.style.position="absolute";em.src=img.big.url;this.dom.mainBox.appendChild(em);this._switchImages(em);};SZN.LightBox.Main.CenteredScaled=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Main.CenteredScaled","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Main});SZN.LightBox.Main.CenteredScaled.prototype.$constructor=function(owner){this.callSuper("$constructor",arguments.callee)(owner);this.scaledImage=null;};SZN.LightBox.Main.CenteredScaled.prototype._generateImgElm=function(img){var em=new SZN.LightBox.ScaledImage(this,img.big.url,this.width,this.height,this.dom.mainBox);em.render();if(this.scaledImage){this.scaledImage.$destructor();this.scaledImage=null;}this.scaledImage=em;};SZN.LightBox.Main.CenteredScaled.prototype._generateFlashElm=function(img){this.callSuper("_generateFlashElm",arguments.callee)(img);if(img.width||img.height){this.current.style.position="absolute";var w=img.width?img.width:this.width;var h=img.height?img.height:this.height;var pw=this.current.parentNode.clientWidth;var ph=this.current.parentNode.clientHeight;this.current.style.top=Math.round((ph-h)/2)+"px";this.current.style.left=Math.round((pw-w)/2)+"px";}};SZN.LightBox.Transition=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Transition","VERSION":"1.0","CLASS":"class"});SZN.LightBox.Transition.prototype.$constructor=function(owner){this.owner=owner;this.options=owner.options.transitionOpt;};SZN.LightBox.Transition.prototype.$destructor=function(){};SZN.LightBox.Transition.prototype.start=function(firstElm,secondElm){this.first=firstElm;this.second=secondElm;this._finish();};SZN.LightBox.Transition.prototype._finish=function(){this.second.style.visibility="visible";if(this.first){this.first.parentNode.removeChild(this.first);}this.first=null;this.second=null;this.owner.createEvent(this,"transitionDone");};SZN.LightBox.Transition.Fade=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Transition.Fade","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Transition});SZN.LightBox.Transition.Fade.prototype.$constructor=function(owner){this.options={"interval":400,"frequency":25,"overlap":1};this.owner=owner;for(var p in owner.options.transitionOpt){this.options[p]=owner.options.transitionOpt[p];}this.running1=false;this.running2=false;this._secondOpacity=0;this._step1=SZN.bind(this,this._step1);this._step2=SZN.bind(this,this._step2);this._finish=SZN.bind(this,this._finish);this.i1=new SZN.Interpolator(1,0,this.options.interval,this._step1,{"frequency":this.options.frequency});this.i2=new SZN.Interpolator(0,1,this.options.interval,this._step2,{"frequency":this.options.frequency,"endCallback":this._finish});};SZN.LightBox.Transition.Fade.prototype.start=function(oldElm,newElm){if(this.running1||this.running2){this.second.parentNode.removeChild(this.second);this.second=newElm;this._setOpacity(this.second,this._secondOpacity);this.second.style.visibility="visible";}else{this.first=oldElm;this.second=newElm;this._secondOpacity=0;this._setOpacity(this.second,0);this.second.style.visibility="visible";if(this.first){this.running1=true;this.i1.start();}else{this._start2();}}};SZN.LightBox.Transition.Fade.prototype._start2=function(){this.running2=true;this.i2.start();};SZN.LightBox.Transition.Fade.prototype._step1=function(value){if(!this.first){return;}this._setOpacity(this.first,value);if(!this.running2&&value<=this.options.overlap){this._start2();}};SZN.LightBox.Transition.Fade.prototype._step2=function(value){this._secondOpacity=value;this._setOpacity(this.second,value);};SZN.LightBox.Transition.Fade.prototype._finish=function(){this.running1=false;this.running2=false;this.callSuper("_finish",arguments.callee)();};SZN.LightBox.Transition.Fade.prototype._setOpacity=function(node,value){node.style.opacity=value;node.style.filter="alpha(opacity="+Math.round(value*100)+")";};SZN.LightBox.ScaledImage=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.ScaledImage","VERSION":"1.0","CLASS":"class"});SZN.LightBox.ScaledImage.prototype.$constructor=function(owner,src,w,h,rootElm){this.owner=owner;this.w=w;this.h=h;this.src=src;this.rootElm=rootElm;this.ec=[];this.dom={};};SZN.LightBox.ScaledImage.prototype.render=function(){this.dom.elm=SZN.cEl("img");this.dom.container=SZN.cEl("div",false,false,{"position":"absolute","left":"-1000px","top":"-1000px","width":"1px","height":"1px","overflow":"hidden"});this.ec.push(SZN.Events.addListener(this.dom.elm,"load",this,"_loaded",false,true));document.body.insertBefore(this.dom.container,document.body.firstChild);this.dom.container.appendChild(this.dom.elm);this.dom.elm.src=this.src;};SZN.LightBox.ScaledImage.prototype.$destructor=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}for(var p in this.dom){this.dom[p]=null;}for(var p in this){this[p]=null;}};SZN.LightBox.ScaledImage.prototype._loaded=function(e,elm){var w=this.dom.elm.width;var h=this.dom.elm.height;var ratio_w=w/this.w;var ratio_h=h/this.h;var max=Math.max(ratio_w,ratio_h);if(max>1){w=w/max;h=h/max;if(w&&h){this.dom.elm.width=Math.ceil(w);this.dom.elm.height=Math.ceil(h);}}var pw=this.rootElm.clientWidth;var ph=this.rootElm.clientHeight;this.dom.elm.style.position="absolute";this.dom.elm.style.visibility="hidden";this.dom.elm.style.top=Math.round((ph-h)/2)+"px";this.dom.elm.style.left=Math.round((pw-w)/2)+"px";if(this.rootElm){this.rootElm.appendChild(this.dom.elm);}if(this.dom.container){this.dom.container.parentNode.removeChild(this.dom.container);this.dom.container=false;}this.owner.owner.createEvent(this,"mainImageLoaded");this.owner._switchImages(this.dom.elm);};SZN.LightBox.PageShader=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.PageShader","VERSION":"1.0","CLASS":"class","IMPLEMENT":[SZN.SigInterface]});SZN.LightBox.PageShader.prototype.$constructor=function(owner){this.owner=owner;this.dom={};this.addListener("showed","_show",this.owner);this.addListener("close","_hide",this.owner);this.addListener("windowResize","_resize",this.owner);};SZN.LightBox.PageShader.prototype.$destructor=function(){for(p in this.dom){this.dom[p]=null;}for(p in this){this[p]=null;}};SZN.LightBox.PageShader.prototype._show=function(){this.dom.root=SZN.cEl("div",false,"image-browser-root",{"position":"absolute","left":"0px","top":"0px"});var docSize=SZN.Dom.getDocSize();var docH=document.compatMode=="BackCompat"?document.body.scrollHeight:document.body.offsetHeight;var docW=document.compatMode=="BackCompat"?document.body.scrollWidth:document.body.offsetWidth;this.dom.root.style.width=(docSize.width>docW?docSize.width:docW)+"px";this.dom.root.style.height=(docSize.height>docH?docSize.height:docH)+"px";if(this.owner.options.zIndex){this.dom.root.style.zIndex=this.owner.options.zIndex-1;}var parent=this.owner.dom.container.parentNode;var nextSibling=this.owner.dom.container.nextSibling;parent.insertBefore(this.dom.root,nextSibling);SZN.Dom.elementsHider(this.dom.root,false,"hide");};SZN.LightBox.PageShader.prototype._hide=function(){if(this.dom.root&&this.dom.root.parentNode){SZN.Dom.elementsHider(this.dom.root,false,"hide");this.dom.root.parentNode.removeChild(this.dom.root);}this.dom.root=null;};SZN.LightBox.PageShader.prototype._resize=function(){this._hide();this._show();};SZN.LightBox.Strip=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Strip","VERSION":"1.0","CLASS":"class"});SZN.LightBox.Strip.prototype.$constructor=function(owner){this.owner=owner;this.options=this.owner.options.stripOpt;this.dom={};};SZN.LightBox.Strip.prototype.$destructor=function(){for(p in this.dom){this.dom[p]=null;}for(p in this){this[p]=null;}};SZN.LightBox.Strip.prototype.render=function(){this.dom.mainBox=SZN.cEl("div",this.options.id,this.options.className);return this.dom.mainBox;};SZN.LightBox.Strip.prototype.update=function(index){};SZN.LightBox.Strip.Scrollable=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Strip.Scrollable","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Strip});SZN.LightBox.Strip.Scrollable.prototype.$constructor=function(owner){this.callSuper("$constructor",arguments.callee)(owner);this.objCache=[];this.ec=[];this.activeBorder={};};SZN.LightBox.Strip.Scrollable.prototype.$destructor=function(){for(var i=0;i<this.objCache.length;i++){this.objCache[i].$destructor();this.objCache[i]=null;}for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}this.callSuper("$destructor",arguments.callee)();};SZN.LightBox.Strip.Scrollable.prototype.render=function(){this.callSuper("render",arguments.callee)();this.owner.dom.content.appendChild(this.dom.mainBox);this.dom.mainBox.style.position="relative";this.dom.imageBox=SZN.cEl("div");this.dom.mainBox.appendChild(this.dom.imageBox);this.dom.imageTable=SZN.cEl("table");this.dom.imageTable.style.borderCollapse="collapse";var tbody=SZN.cEl("tbody");this.dom.imageTable.appendChild(tbody);this.dom.imageBox.appendChild(this.dom.imageTable);for(var i=0;i<this.owner.data.length;i++){if(this.options.orientation=="vertical"){var tr=SZN.cEl("tr");var td=SZN.cEl("td");tr.appendChild(td);td.align="center";td.vAlign="center";tbody.appendChild(tr);}else{if(i==0){var tr=SZN.cEl("tr");}var td=SZN.cEl("td");td.align="center";td.vAlign="center";tr.appendChild(td);if(i==this.owner.data.length-1){tbody.appendChild(tr);}}var div=SZN.cEl("div",false,this.options.imageBoxClassName);div.style.position="relative";td.style.padding="0px";td.appendChild(div);}var elms=SZN.Dom.arrayFromCollection(tbody.getElementsByTagName("div"));for(var i=0;i<this.owner.data.length;i++){var stripImg=new SZN.LightBox.StripImage(this.owner,this.options,this.owner.data[i],i);stripImg.render(elms[i]);this.objCache.push(stripImg);}this.dom.active=SZN.cEl("div",this.options.activeId,this.options.activeClassName);this.dom.active.style.position="absolute";this.dom.mainBox.appendChild(this.dom.active);this.activeBorder.top=parseInt(SZN.Dom.getStyle(this.dom.active,"borderTopWidth"));this.activeBorder.bottom=parseInt(SZN.Dom.getStyle(this.dom.active,"borderBottomWidth"));this.activeBorder.left=parseInt(SZN.Dom.getStyle(this.dom.active,"borderLeftWidth"));this.activeBorder.right=parseInt(SZN.Dom.getStyle(this.dom.active,"borderRightWidth"));this.dom.mainBox.removeChild(this.dom.active);this._addEvents();return this.dom.mainBox;};SZN.LightBox.Strip.Scrollable.prototype._addEvents=function(){if(this.options.orientation=="horizontal"){this.ec.push(SZN.Events.addListener(this.dom.mainBox,"DOMMouseScroll",this,"_scroll"));this.ec.push(SZN.Events.addListener(this.dom.mainBox,"mousewheel",this,"_scroll"));}};SZN.LightBox.Strip.Scrollable.prototype._scroll=function(e,elm){SZN.Events.cancelDef(e);var delta=e.wheelDelta||e.detail;if(SZN.Browser.client=="gecko"){delta=-delta;}if(delta>0){this.dom.mainBox.scrollLeft-=30;}else{this.dom.mainBox.scrollLeft+=30;}};SZN.LightBox.Strip.Scrollable.prototype.update2=function(index){this.dom.active.style.position="absolute";var pos=SZN.Dom.getBoxPosition(this.objCache[index].dom.img.parentNode,this.dom.imageTable);var borderTop=parseInt(SZN.Dom.getStyle(this.dom.active,"borderTopWidth"));var borderBottom=parseInt(SZN.Dom.getStyle(this.dom.active,"borderBottomWidth"));var borderLeft=parseInt(SZN.Dom.getStyle(this.dom.active,"borderLeftWidth"));var borderRight=parseInt(SZN.Dom.getStyle(this.dom.active,"borderRightWidth"));if(this.options.activeBorder=="inner"){this.dom.active.style.top=pos.top+"px";this.dom.active.style.left=pos.left+"px";this.dom.active.style.width=(this.objCache[index].dom.img.parentNode.offsetWidth-(!isNaN(borderLeft)?borderLeft:0)-(!isNaN(borderRight)?borderRight:0))+"px";this.dom.active.style.height=(this.objCache[index].dom.img.parentNode.offsetHeight-(!isNaN(borderTop)?borderTop:0)-(!isNaN(borderBottom)?borderBottom:0))+"px";}else{this.dom.active.style.top=(pos.top-(!isNaN(borderLeft)?borderLeft:0))+"px";this.dom.active.style.left=(pos.left-(!isNaN(borderTop)?borderTop:0))+"px";this.dom.active.style.width=(this.objCache[index].dom.img.parentNode.offsetWidth)+"px";this.dom.active.style.height=(this.objCache[index].dom.img.parentNode.offsetHeight)+"px";}if(this.options.orientation=="vertical"){var a=SZN.Dom.getBoxPosition(this.objCache[index].dom.img.parentNode,this.dom.mainBox);var b=parseInt(SZN.Dom.getStyle(this.dom.mainBox,"height"))/2;var c=parseInt(SZN.Dom.getStyle(this.objCache[index].dom.img.parentNode,"height"))/2;var scroll=a.top-b+c;this.dom.mainBox.scrollTop=Math.round(scroll);}else{var a=SZN.Dom.getBoxPosition(this.objCache[index].dom.img.parentNode,this.dom.mainBox);var b=parseInt(SZN.Dom.getStyle(this.dom.mainBox,"width"))/2;var c=parseInt(SZN.Dom.getStyle(this.objCache[index].dom.img.parentNode,"width"))/2;var scroll=a.left-b+c;this.dom.mainBox.scrollLeft=Math.round(scroll);}};SZN.LightBox.Strip.Scrollable.prototype.update=function(index){if(this.options.activeBorder=="inner"){this.dom.active.style.left="0px";this.dom.active.style.top="0px";this.dom.active.style.width=(this.objCache[index].dom.img.parentNode.offsetWidth-(!isNaN(this.activeBorder.left)?this.activeBorder.left:0)-(!isNaN(this.activeBorder.right)?this.activeBorder.right:0))+"px";this.dom.active.style.height=(this.objCache[index].dom.img.parentNode.offsetHeight-(!isNaN(this.activeBorder.top)?this.activeBorder.top:0)-(!isNaN(this.activeBorder.bottom)?this.activeBorder.bottom:0))+"px";}else{this.dom.active.style.left=-(!isNaN(this.activeBorder.left)?this.activeBorder.left:0)+"px";this.dom.active.style.top=-(!isNaN(this.activeBorder.top)?this.activeBorder.top:0)+"px";this.dom.active.style.width=(this.objCache[index].dom.img.parentNode.clientWidth)+"px";this.dom.active.style.height=(this.objCache[index].dom.img.parentNode.clientHeight)+"px";}this.objCache[index].dom.img.parentNode.appendChild(this.dom.active);if(this.options.orientation=="vertical"){var a=SZN.Dom.getBoxPosition(this.objCache[index].dom.img.parentNode,this.dom.mainBox);var b=parseInt(SZN.Dom.getStyle(this.dom.mainBox,"height"))/2;var c=parseInt(SZN.Dom.getStyle(this.objCache[index].dom.img.parentNode,"height"))/2;var scroll=a.top-b+c;this.dom.mainBox.scrollTop=Math.round(scroll);}else{var a=SZN.Dom.getBoxPosition(this.objCache[index].dom.img.parentNode,this.dom.mainBox);var b=parseInt(SZN.Dom.getStyle(this.dom.mainBox,"width"))/2;var c=parseInt(SZN.Dom.getStyle(this.objCache[index].dom.img.parentNode,"width"))/2;var scroll=a.left-b+c;this.dom.mainBox.scrollLeft=Math.round(scroll);}};SZN.LightBox.StripImage=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.StripImage","VERSION":"1.0","CLASS":"class"});SZN.LightBox.StripImage.prototype.$constructor=function(mainOwner,options,data,order){this.mainOwner=mainOwner;this.data=data;this.options=options;this.order=order;this.dom={};this.ec=[];};SZN.LightBox.StripImage.prototype.$destructor=function(){for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}};SZN.LightBox.StripImage.prototype.render=function(elm){this.dom.parentNode=elm;this.dom.tmpBox=SZN.cEl("div",false,false,{"position":"absolute","top":"-100px","left":"-100px","width":"1px","height":"1px","overflow":"hidden"});var body=document.getElementsByTagName("body")[0];body.insertBefore(this.dom.tmpBox,body.firstChild);this.dom.img=SZN.cEl("img");this.dom.tmpBox.appendChild(this.dom.img);this.ec.push(SZN.Events.addListener(this.dom.img,"load",this,"_loaded"));this.dom.img.src=this.data.small.url;this.dom.img.alt=this.data.alt;this.ec.push(SZN.Events.addListener(elm,"click",this,"_click"));};SZN.LightBox.StripImage.prototype._click=function(e,elm){this.mainOwner.go(this.order);};SZN.LightBox.StripImage.prototype._loaded=function(e,elm){var w=elm.width;var h=elm.height;this.dom.img.style.display="none";this.dom.parentNode.appendChild(this.dom.img);this.dom.tmpBox.parentNode.removeChild(this.dom.tmpBox);this.dom.tmpBox=null;var boxW=parseInt(this.dom.img.parentNode.clientWidth);var boxH=parseInt(this.dom.img.parentNode.clientHeight);var ratio_w=w/boxW;var ratio_h=h/boxH;var max=Math.max(ratio_w,ratio_h);if(max>1){w=Math.floor(w/max);h=Math.floor(h/max);if(w&&h){this.dom.img.width=w;this.dom.img.height=h;}}var ph=this.dom.parentNode.clientHeight;this.dom.img.style.marginTop=Math.round((ph-h)/2)+"px";this.dom.img.parentNode.textAlign="center";this.dom.img.style.display="";};SZN.LightBox.Description=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Description","VERSION":"1.0","CLASS":"class"});SZN.LightBox.Description.prototype.$constructor=function(owner){this.owner=owner;this.options=owner.options.descriptionOpt;this.dom={};};SZN.LightBox.Description.prototype.$destructor=function(){for(var p in this.dom){this.dom[p]=null;}for(var p in this){this[p]=null;}};SZN.LightBox.Description.prototype.render=function(){this.dom.box=SZN.cEl("div",this.options.id,this.options.className);return this.dom.box;};SZN.LightBox.Description.prototype.update=function(index){};SZN.LightBox.Description.Basic=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Description.Basic","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Description});SZN.LightBox.Description.Basic.prototype.render=function(){this.callSuper("render",arguments.callee)();this.dom.content=SZN.cEl("div",this.options.contentId,this.options.contentClassName);this.dom.box.appendChild(this.dom.content);return this.dom.box;};SZN.LightBox.Description.Basic.prototype.update=function(index){if(this.owner.data[index].description){this.dom.content.innerHTML=this.owner.data[index].description;}};SZN.LightBox.Navigation=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Navigation","VERSION":"1.0","CLASS":"class"});SZN.LightBox.Navigation.prototype.$constructor=function(owner){this.owner=owner;this.options=owner.options.navigationOpt;this.dom={};this.ec=[];};SZN.LightBox.Navigation.prototype.$destructor=function(){for(var p in this.dom){this.dom[p]=null;}for(var i=0;i<this.ec.length;i++){SZN.Events.removeListener(this.ec[i]);}for(var p in this){this[p]=null;}};SZN.LightBox.Navigation.prototype.render=function(){return SZN.cEl("div",this.options.id,this.options.className);};SZN.LightBox.Navigation.prototype.update=function(index){};SZN.LightBox.Navigation.Basic=SZN.ClassMaker.makeClass({"NAME":"SZN.LightBox.Navigation.Basic","VERSION":"1.0","CLASS":"class","EXTEND":SZN.LightBox.Navigation});SZN.LightBox.Navigation.Basic.prototype.render=function(){this.dom.next=SZN.cEl("a",this.options.nextId,this.options.nextClassName);this.dom.prev=SZN.cEl("a",this.options.prevId,this.options.prevClassName);this.dom.nextDisabled=SZN.cEl("a",this.options.nextId?this.options.nextId+"-disabled":false,this.options.nextClassName+"-disabled");this.dom.prevDisabled=SZN.cEl("a",this.options.prevId?this.options.prevId+"-disabled":false,this.options.prevClassName+"-disabled");this.dom.close=SZN.cEl("a",this.options.closeId,this.options.closeClassName);this.dom.next.href="#";this.dom.prev.href="#";this.dom.nextDisabled.href="#";this.dom.prevDisabled.href="#";this.dom.close.href="#";this.dom.nextPreload=SZN.cEl("div",this.options.nextId?this.options.nextId+"-preload":false,this.options.nextClassName+"-preload",{"position":"absolute","visibility":"hidden","height":"1px","width":"1px"});this.dom.nextDisabledPreload=SZN.cEl("div",this.options.nextId?this.options.nextId+"-disabled-preload":false,this.options.nextClassName+"-disabled-preload",{"position":"absolute","visibility":"hidden","height":"1px","width":"1px"});this.dom.prevPreload=SZN.cEl("div",this.options.prevId?this.options.prevId+"-preload":false,this.options.prevClassName+"-preload",{"position":"absolute","visibility":"hidden","height":"1px","width":"1px"});this.dom.prevDisabledPreload=SZN.cEl("div",this.options.prevId?this.options.prevId+"-disabled-preload":false,this.options.prevClassName+"-disabled-preload",{"position":"absolute","visibility":"hidden","height":"1px","width":"1px"});this.dom.closePreload=SZN.cEl("div",this.options.closeId?this.options.closeId+"-preload":false,this.options.closeClassName+"-preload",{"position":"absolute","visibility":"hidden","height":"1px","width":"1px"});this._addEvents();var div=SZN.cEl("div",this.options.id,this.options.className);SZN.Dom.append([div,this.dom.next,this.dom.nextDisabled,this.dom.prev,this.dom.prevDisabled,this.dom.close]);SZN.Dom.append([div,this.dom.nextPreload,this.dom.nextDisabledPreload,this.dom.prevPreload,this.dom.prevDisabledPreload,this.dom.closePreload]);return div;};SZN.LightBox.Navigation.Basic.prototype._addEvents=function(){this.ec.push(SZN.Events.addListener(this.dom.next,"click",this,"_next"));this.ec.push(SZN.Events.addListener(this.dom.prev,"click",this,"_previous"));this.ec.push(SZN.Events.addListener(this.dom.close,"click",this,"_close"));this.ec.push(SZN.Events.addListener(document,"keydown",this,"_closeKey"));this.ec.push(SZN.Events.addListener(this.dom.nextDisabled,"click",this,"_disabled"));this.ec.push(SZN.Events.addListener(this.dom.prevDisabled,"click",this,"_disabled"));};SZN.LightBox.Navigation.Basic.prototype._disabled=function(e,elm){elm.blur();SZN.Events.cancelDef(e);};SZN.LightBox.Navigation.Basic.prototype._close=function(e,elm){elm.blur();SZN.Events.cancelDef(e);SZN.Events.stopEvent(e);this.owner.close();};SZN.LightBox.Navigation.Basic.prototype._next=function(e,elm){elm.blur();SZN.Events.cancelDef(e);this.owner.next();};SZN.LightBox.Navigation.Basic.prototype._previous=function(e,elm){elm.blur();SZN.Events.cancelDef(e);this.owner.previous();};SZN.LightBox.Navigation.Basic.prototype._closeKey=function(e,elm){if(e.keyCode==27){this.owner.close();}};SZN.LightBox.Navigation.Basic.prototype.update=function(index){if(!this.options.continuous){this.dom.prev.style.display="";this.dom.next.style.display="";this.dom.prevDisabled.style.display="none";this.dom.nextDisabled.style.display="none";if(index==0){this.dom.prev.style.display="none";if(this.options.showDisabled){this.dom.prevDisabled.style.display="";}}if(index==this.owner.data.length-1){this.dom.next.style.display="none";if(this.options.showDisabled){this.dom.nextDisabled.style.display="";}}}else{this.dom.prevDisabled.style.display="none";this.dom.nextDisabled.style.display="none";this.dom.prev.style.display="";this.dom.next.style.display="";}};}