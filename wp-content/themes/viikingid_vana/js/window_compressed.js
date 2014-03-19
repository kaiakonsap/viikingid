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
*/{SZN.Window=SZN.ClassMaker.makeClass({"NAME":"Window","VERSION":"1.0","CLASS":"class"});SZN.Window.prototype.$constructor=function(optObj){this.options={"imagePath":"/img/shadow-","imageFormat":"png","sizes":[6,6,6,6]};for(var p in optObj){this.options[p]=optObj[p];}this.content=SZN.cEl("div",false,"window-content",{"position":"relative"});;this.container=false;this._buildDom();};SZN.Window.prototype._buildDom=function(){var imageNames=[["lt","t","rt"],["l","","r"],["lb","b","rb"]];this.container=SZN.cEl("div",false,"window-container",{"position":"relative","zIndex":10});var table=SZN.cEl("table",false,false,{"borderCollapse":"collapse","position":"relative"});var tbody=SZN.cEl("tbody");SZN.Dom.append([table,tbody],[this.container,table]);for(var i=0;i<3;i++){var tr=SZN.cEl("tr");tbody.appendChild(tr);for(var j=0;j<3;j++){var td=SZN.cEl("td");td.style.padding="0px";td.style.margin="0px";var div=(i==1&&j==1?this.content:SZN.cEl("div",false,false,{"overflow":"hidden"}));td.appendChild(div);var im=imageNames[i][j];if(im){var path=this.options.imagePath+im+"."+this.options.imageFormat;if(SZN.Browser.klient=="ie"&&this.options.imageFormat.match(/png/i)){td.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+path+"',sizingMethod='scale')";}else{td.style.backgroundImage="url("+path+")";}}if(i==0){div.style.height=this.options.sizes[0]+"px";}if(i==2){div.style.height=this.options.sizes[2]+"px";}if(j==0){div.style.width=this.options.sizes[3]+"px";}if(j==2){div.style.width=this.options.sizes[1]+"px";}if(j==1&&i!=1){td.style.width="auto";}tr.appendChild(td);}}};SZN.Window.prototype.$destructor=function(){for(var p in this){this[p]=null;}};SZN.Window.prototype.show=function(){this.container.style.display="";};SZN.Window.prototype.hide=function(){this.container.style.display="none";};}