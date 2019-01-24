document.writeln("<div id=\"loading\" style=\"display:none\"><table width=\"100%\" cellspacing=\"5\"><tr><td>");
document.writeln("<textarea name=\"{textareaco}\" id=\"{textareaco}\">");
document.writeln("<\/textarea>");
document.writeln("<table id=\"anniu\" width=\"100%\"><tr><!--[if IE]><td><input type=\"button\" onclick=\"get()\" value=\"粘贴进来\" class=\"pbtn1\" \/><\/td><td><div class=\"jiantou\">›<span class=\"STYLE3\">›<\/span><\/div><\/td><![endif]-->");
document.writeln("<td><input type=\"submit\" value=\"开始处理\" class=\"pbtn1\"\/><div style=\"position:relative;width:0;height:0\"><div id=\"yincang_chuli\" class=\"yincang_chuli\"><input type=\"button\" value=\"词库载入失败了\" class=\"pbtn3\"\/><\/div><\/div><\/td>");
document.writeln("<td id=\"copy_flash\"><span id=\"d_clip_container\" style=\"position:relative;display:none;margin-left:10px;\"><input type=\"button\" id=\"d_clip_button\" value=\"复制出去\" class=\"pbtn1\" \/><\/span><!--[if IE]><div class=\"jiantou\">›<span class=\"STYLE3\">›<\/span><\/div><\/td><td><input type=\"button\" id=\"d_clip_button_ie\" onClick=\"CopyForIE();\" value=\"复制出去\" class=\"pbtn1\" style=\"margin-left:10px;\" \/><![endif]--><input type=\'button\' onClick=\'copyUrl2()\' id=\"newcopy\" value=\'复制出去\' class=\"pbtn1\" style=\"margin-left:10px;\"\/><\/td>");
document.writeln("<td width=\"100%\"><SPAN id=\"copyshow\"><\/SPAN><\/td><td><input id=\"CHundo\" type=\"button\" onclick=\"CHCommand.undo()\" title=\"撤销\"></td><td><input id=\"CHredo\" type=\"button\" onclick=\"CHCommand.redo()\" title=\"恢复\"><\/td><\/td><\/tr><\/table><\/td><\/tr><\/table><\/div>");



function get(){var wby = document.getElementById("co");var isValue=clipboardData.getData("text");wby.value=isValue}

/* 强行分隔 */
function convert_fgf(){var s = document.getElementById("co").value.toString();var t = "";var code = (document.getElementById("fgf1").value);for(var i=0,l=s.length; i<l; i++){t += s.charAt(i) + code;}document.getElementById("co").value = t;}
/* 倒排字序 */
 function convert_dd() {
  var s = document.getElementById("co").value.toString();
  var arr = s.split("\n");
  var result = "";
  for ( var i = 0; i < arr.length; i++) {
   arr[i]=arr[i].replace(/(^[\s　]*)|([\s　]*$)/g,   "");
   arr[i]=arr[i].replace("\n","");
   if(arr[i]!="")
   {
      result += flipString(arr[i])+"\n";
   }   
  }
  document.getElementById("co").value = result;
 }
 function flipString(aString) {
  var last = aString.length - 1;
  var result = new Array(aString.length)
  for ( var i = last; i >= 0; --i) {
   var c = aString.charAt(i)
   var r = flipTable[c]
   result[last - i] = r != undefined ? r : c
  }
  return result.join('')
 }
 var flipTable = {
  '[' : ']',
  '【' : '】',
  '(' : ')',
  '（' : '）',
  '{' : '}',
  '<' : '>',
  '《' : '》',
  '“' : '”',
  '‘' : '’',
  '\r' : '\n'
 }
 for (i in flipTable) {
  flipTable[flipTable[i]] = i
 }
/* 竖排文字 */
var tblChars = [['┏','┓','┗','┛','┯','┷','┃','│', '━'],['╔','╗','╚','╝','╤','╧','║','│', '═'],['┌','┐','└','┘','┬','┴','│','┆', '─'],[' ',' ',' ',' ',' ',' ',' ',' ',  ' '],['','','','','','','│','│', ''],];
var tblTemplet = 1;var blankChar = '┊';var width=20;var height=8;
function convert1(){var s = document.getElementById("co").value.toString();s = s.replace(/\r/g, "");if(s.length == 0){document.getElementById("co").focus();alert("");return;}
var ary = [];var i,j, index;var t = "";index = 0;width = document.getElementById("x").value * 1;height = document.getElementById("y").value * 1;tblTemplet = document.getElementById("tbl").value * 1;for(i=width*2; i>=0; i--){ary[i] = new Array();}
while(index < s.length){for(i=width*2; i>=0; i--){for(j=0; j<=(height+1); j++){if( i == (width * 2)){if(j==0){ary[i][j] = tblChars[tblTemplet][1];}else if(j == (height + 1)){ary[i][j] = tblChars[tblTemplet][3];}else{ary[i][j] = tblChars[tblTemplet][6];}}else if( i== 0){
if(j==0){ary[i][j] = tblChars[tblTemplet][0];}else if(j == (height + 1)){ary[i][j] = tblChars[tblTemplet][2];}else{ary[i][j] = tblChars[tblTemplet][6];}}else if( i % 2 == 0){
if(j==0){ary[i][j] = tblChars[tblTemplet][4];}else if(j == (height + 1)){ary[i][j] = tblChars[tblTemplet][5];}else{ary[i][j] = tblChars[tblTemplet][7];}}else if(j == 0 || j == (height + 1)){ary[i][j] = tblChars[tblTemplet][8];}else{var c = getChar(s, index++);
if (c == '\n' || c == '\r'){/*if(j == 1){j = 0;continue;}else{*/while(j<(height+1)){ary[i][j] = blankChar;j++;}
j = height;
//}
}else{ary[i][j] = c;}}}}
for(j=0; j<=(height + 1); j++){
for(i=0; i<=width*2; i++){t += ary[i][j];}t += "\r\n";}t += "\r\n";}document.getElementById("co").value = t;}
var half = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','(',')','[',']','{','}','<','>','*','&','^','%','$','#','@','!','~','`','+','-','=','_','|','\\','\'','"',';',':','.',',','?','/',' ','（','）','【','】','《','》', '…', '—', '～', '“', '”', '‘', '’','「','」','『','』','【','】','《','》','〈','〉','（','）','｛','｝',' ','　','ā','á','ǎ','à','ē','é','ě','è','ī','í','ǐ','ì','ō','ó','ǒ','ò','ū','ú','ǔ','ù','ǚ','ǜ'];
var full = ['０','１','２','３','４','５','６','７','８','９','ａ','ｂ','ｃ','ｄ','ｅ','ｆ','ｇ','ｈ','ｉ','ｊ','ｋ','ｌ','ｍ','ｎ','ｏ','ｐ','ｑ','ｒ','ｓ','ｔ','ｕ','ｖ','ｗ','ｘ','ｙ','ｚ','Ａ','Ｂ','Ｃ','Ｄ','Ｅ','Ｆ','Ｇ','Ｈ','Ｉ','Ｊ','Ｋ','Ｌ','Ｍ','Ｎ','Ｏ','Ｐ','Ｑ','Ｒ','Ｓ','Ｔ','Ｕ','Ｖ','Ｗ','Ｘ','Ｙ','Ｚ','︵','︶','︻','︼','︷','︸','︽','︾','＊','＆','︿','％','＄','＃','＠','！','～','｀','＋','－','＝','＿','｜','＼','＇','＂','；','：','。','，','？','／', blankChar,'︵','︶','︻','︼','︽','︾', '┇', '│', '§','﹁','﹂','﹃','﹄','﹁','﹂','﹃','﹄','︻','︼','︽','︾','︿','﹀','︵','︶','︷','︸','┊','┊','ā.','á.','ǎ.','à.','ē.','é.','ě.','è.','ī.','í.','ǐ.','ì.','ō.','ó.','ǒ.','ò.','ū.','ú.','ǔ.','ù.','ǚ.','ǜ.'];
function getChar(s, index){if(index >= s.length){return blankChar;}
var c = s.charAt(index);for(var i=0; i<half.length; i++){if(c == half[i]){c = full[i]; }}return c;} 
/* 文章排版 */
function convert_paiban(){var body = "\n"+document.getElementById("co").value;body = body.replace(/ |　/ig,"");body = body.replace(/\r\n/ig,"\n");body = body.replace(/\n\n/ig,"\n");body = body.replace(/\n\n/ig,"\n");body = body.replace(/\n\n/ig,"\n");body = body.replace(/\n\n/ig,"\n");body = body.replace(/\n/ig,"\n\n");body = body.replace("\n\n","　　");body = body.replace(/\n/ig,"\n　　");document.getElementById("co").value=body;}
/* 非IE浏览器Flash复制 */
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard={version:"1.0.7",clients:{},moviePath:'ZeroClipboard.swf',nextId:1,$:function(thingy){if(typeof(thingy)=='string')thingy=document.getElementById(thingy);if(!thingy.addClass){thingy.hide=function(){this.style.display='none'};thingy.show=function(){this.style.display=''};thingy.addClass=function(name){this.removeClass(name);this.className+=' '+name};thingy.removeClass=function(name){var classes=this.className.split(/\s+/);var idx=-1;for(var k=0;k<classes.length;k++){if(classes[k]==name){idx=k;k=classes.length}}if(idx>-1){classes.splice(idx,1);this.className=classes.join(' ')}return this};thingy.hasClass=function(name){return!!this.className.match(new RegExp("\\s*"+name+"\\s*"))}}return thingy},setMoviePath:function(path){this.moviePath=path},dispatch:function(id,eventName,args){var client=this.clients[id];if(client){client.receiveEvent(eventName,args)}},register:function(id,client){this.clients[id]=client},getDOMObjectPosition:function(obj,stopObj){var info={left:0,top:0,width:obj.width?obj.width:obj.offsetWidth,height:obj.height?obj.height:obj.offsetHeight};while(obj&&(obj!=stopObj)){info.left+=obj.offsetLeft;info.top+=obj.offsetTop;obj=obj.offsetParent}return info},Client:function(elem){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId='ZeroClipboardMovie_'+this.id;ZeroClipboard.register(this.id,this);if(elem)this.glue(elem)}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:'',handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(elem,appendElem,stylesToAdd){this.domElement=ZeroClipboard.$(elem);var zIndex=99;if(this.domElement.style.zIndex){zIndex=parseInt(this.domElement.style.zIndex,10)+1}if(typeof(appendElem)=='string'){appendElem=ZeroClipboard.$(appendElem)}else if(typeof(appendElem)=='undefined'){appendElem=document.getElementsByTagName('body')[0]}var box=ZeroClipboard.getDOMObjectPosition(this.domElement,appendElem);this.div=document.createElement('div');var style=this.div.style;style.position='absolute';style.left=''+box.left+'px';style.top=''+box.top+'px';style.width=''+box.width+'px';style.height=''+box.height+'px';style.zIndex=zIndex;if(typeof(stylesToAdd)=='object'){for(addedStyle in stylesToAdd){style[addedStyle]=stylesToAdd[addedStyle]}}appendElem.appendChild(this.div);this.div.innerHTML=this.getHTML(box.width,box.height)},getHTML:function(width,height){var html='';var flashvars='id='+this.id+'&width='+width+'&height='+height;if(navigator.userAgent.match(/MSIE/)){var protocol=location.href.match(/^https/i)?'https://':'http://';html+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>'}else{html+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />'}return html},hide:function(){if(this.div){this.div.style.left='-2000px'}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML='';var body=document.getElementsByTagName('body')[0];try{body.removeChild(this.div)}catch(e){}this.domElement=null;this.div=null}},reposition:function(elem){if(elem){this.domElement=ZeroClipboard.$(elem);if(!this.domElement)this.hide()}if(this.domElement&&this.div){var box=ZeroClipboard.getDOMObjectPosition(this.domElement);var style=this.div.style;style.left=''+box.left+'px';style.top=''+box.top+'px'}},setText:function(newText){this.clipText=newText;if(this.ready)this.movie.setText(newText)},addEventListener:function(eventName,func){eventName=eventName.toString().toLowerCase().replace(/^on/,'');if(!this.handlers[eventName])this.handlers[eventName]=[];this.handlers[eventName].push(func)},setHandCursor:function(enabled){this.handCursorEnabled=enabled;if(this.ready)this.movie.setHandCursor(enabled)},setCSSEffects:function(enabled){this.cssEffects=!!enabled},receiveEvent:function(eventName,args){eventName=eventName.toString().toLowerCase().replace(/^on/,'');switch(eventName){case'load':this.movie=document.getElementById(this.movieId);if(!this.movie){var self=this;setTimeout(function(){self.receiveEvent('load',null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var self=this;setTimeout(function(){self.receiveEvent('load',null)},100);this.ready=true;return}this.ready=true;this.movie.setText(this.clipText);this.movie.setHandCursor(this.handCursorEnabled);break;case'mouseover':if(this.domElement&&this.cssEffects){this.domElement.addClass('hover');if(this.recoverActive)this.domElement.addClass('active')}break;case'mouseout':if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass('active')){this.domElement.removeClass('active');this.recoverActive=true}this.domElement.removeClass('hover')}break;case'mousedown':if(this.domElement&&this.cssEffects){this.domElement.addClass('active')}break;case'mouseup':if(this.domElement&&this.cssEffects){this.domElement.removeClass('active');this.recoverActive=false}break}if(this.handlers[eventName]){for(var idx=0,len=this.handlers[eventName].length;idx<len;idx++){var func=this.handlers[eventName][idx];if(typeof(func)=='function'){func(this,args)}else if((typeof(func)=='object')&&(func.length==2)){func[0][func[1]](this,args)}else if(typeof(func)=='string'){window[func](this,args)}}}}};