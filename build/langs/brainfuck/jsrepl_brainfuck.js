(function(){self.JSREPLEngine=function(){function g(a,d,i,j,c,b){this.result=i;this.error=j;this.sandbox=c;this.result_fn_factory=function(b){return function(a,f){var h,c,e,d;e=a.map(function(b){return b});e.length=e.length<f?f+1:e.length;for(h=c=0,d=e.length;c<d;h=++c)e[h]||(e[h]=0);f<10?h=0:(h=f-10,e[h]="..."+e[h]);e[f]||(e[f]=0);c=e.slice(h,f);e[f+10]!=null&&(e[f+10]+="...");h=e.slice(f+1,+(f+10)+1||9E9);return b(c.concat(["["+e[f]+"]"]).concat(h).join(" "))}};this.result_handler=this.result_fn_factory(this.result);
this.BFI=new this.sandbox.BF.Interpreter(a,d,this.result_handler);b()}g.prototype.Eval=function(a){var d=this;try{return a==="SHOWTAPE"?(this.BFI.result=function(a,c){var b,i,g,f;b=a.map(function(b){return b});b.length=b.length<c?c+1:b.length;for(i=g=0,f=b.length;g<f;i=++g)b[i]||(b[i]=0);b[c]||(b[c]=0);b[c]="["+b[c]+"]";return d.result(b.join(" "))},this.BFI.evaluate(""),this.BFI.result=this.result_handler):a.match(/^RESET\b/)?(this.BFI.reset(),this.BFI.evaluate(a.replace(/^RESET/,""))):this.BFI.evaluate(a)}catch(i){return this.error(i)}};
g.prototype.EvalSync=function(a){var d;d=null;this.BFI.result=this.result_fn_factory(function(a){return d=a});this.BFI.evaluate(a);this.BFI.result=this.result_handler;return d};g.prototype.GetNextLineIndent=function(a){var d;d=function(a){var d,c,b,g;c=a.split("");a=0;for(b=0,g=c.length;b<g;b++)switch(d=c[b],d){case "[":++a;break;case "]":--a}return a};return d(a)<=0?false:(a=d(a.split("\n").slice(-1)[0]),a>0?1:a<0?a:0)};return g}()}).call(this);
