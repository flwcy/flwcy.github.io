var searchFunc=function(t,e,r){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var a=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var n=document.getElementById(e);var i=document.getElementById(r);n.addEventListener("input",function(){var t='<ul class="search-result-list">';var e=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="";if(this.value.trim().length<=0){return}a.forEach(function(r){var a=true;var n=[];var i=r.title.trim().toLowerCase();var s=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var l=r.url;var c=-1;var u=-1;var f=-1;if(i!=""&&s!=""){e.forEach(function(t,e){c=i.indexOf(t);u=s.indexOf(t);if(c<0&&u<0){a=false}else{if(u<0){u=0}if(e==0){f=u}}})}if(a){t+="<li><a href='"+l+"' class='search-result-title' target='_blank'>"+"> "+i+"</a>";var o=r.content.trim().replace(/<[^>]+>/g,"");if(f>=0){var v=f-6;var h=f+6;if(v<0){v=0}if(v==0){h=10}if(h>o.length){h=o.length}var m=o.substr(v,h);e.forEach(function(t){var e=new RegExp(t,"gi");m=m.replace(e,'<em class="search-keyword">'+t+"</em>")});t+='<p class="search-result">'+m+"...</p>"}}});i.innerHTML=t})}})};