this.JSON||(this.JSON={});(function(){function k(e){return e<10?"0"+e:e}function o(e){p.lastIndex=0;return p.test(e)?'"'+e.replace(p,function(e){var t=r[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function l(t,r){var i,s,u,a,f=e,c,h=r[t];h&&typeof h=="object"&&typeof h.toJSON=="function"&&(h=h.toJSON(t));typeof j=="function"&&(h=j.call(r,t,h));switch(typeof h){case"string":return o(h);case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":return String(h);case"object":if(!h)return"null";e+=n;c=[];if(Object.prototype.toString.apply(h)==="[object Array]"){a=h.length;for(i=0;i<a;i+=1)c[i]=l(i,h)||"null";u=c.length===0?"[]":e?"[\n"+e+c.join(",\n"+e)+"\n"+f+"]":"["+c.join(",")+"]";e=f;return u}if(j&&typeof j=="object"){a=j.length;for(i=0;i<a;i+=1)s=j[i],typeof s=="string"&&(u=l(s,h))&&c.push(o(s)+(e?": ":":")+u)}else for(s in h)Object.hasOwnProperty.call(h,s)&&(u=l(s,h))&&c.push(o(s)+(e?": ":":")+u);u=c.length===0?"{}":e?"{\n"+e+c.join(",\n"+e)+"\n"+f+"}":"{"+c.join(",")+"}";e=f;return u}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;typeof JSON.stringify!="function"&&(JSON.stringify=function(t,r,i){var s;n=e="";if(typeof i=="number")for(s=0;s<i;s+=1)n+=" ";else typeof i=="string"&&(n=i);if(!(j=r)||typeof r=="function"||typeof r=="object"&&typeof r.length=="number")return l("",{"":t});throw Error("JSON.stringify")});typeof JSON.parse!="function"&&(JSON.parse=function(a,e){function c(t,n){var r,i,s=t[n];if(s&&typeof s=="object")for(r in s)Object.hasOwnProperty.call(s,r)&&(i=c(s,r),i!==void 0?s[r]=i:delete s[r]);return e.call(t,n,s)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e=="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse")})})();