var e=require("fs");function t(e,t){console.log(`${e}${t?"":"..."}`)}const r=/[\.,"!\?£\$%\^&\*\|\(\)~\=\+\[\]\/\\;:@#\{\}<>`0-9“”\-]/g,o=/\s+/g,n=/^(and|that|get|what|for|you|this|was|have|with|are|good|the|yeh|yeah|got|now|not|can|too|like|all|but)$/g;let i;function a(e){return!(!(e.length>2&&e.length<20)||n.test(e)||i&&!(i&&e.indexOf("'")<0))}const s=process.argv[2],c=process.argv.slice(2).includes("-a");if(!s)throw Error("No filename provided.");let l;const g=s.slice(0,-14)+"-words.json";try{l=(({data:e},n)=>{i=c,e=function(e){return e.filter(e=>"action"!==e.type)}(e),t("formatting messages");const s=function(e){return e.reduce((e,t)=>e.concat(t.message.replace(r," ").replace(o," ").toLowerCase()),[])}(e);t("collating and filtering words");const l=s.reduce((e,t)=>e.concat(t.split(" ").filter(a)),[]);return t("creating unique words object"),{data:l.reduce((e,t)=>("'"===t[0]?t=t.slice(1):"'"===t[t.length-1]&&(t=t.slice(0,-1)),e[t]?e[t]+=1:e[t]=1,e),{})}})(JSON.parse(e.readFileSync(s,"utf8")))}catch(e){throw Error("Error loading file. Make sure the filename is correct and target file exists.")}if(!l)throw Error("No data returned.");e.writeFile(g,JSON.stringify(l),e=>{if(e)throw e;t("written to "+g,!0)});
//# sourceMappingURL=messages-to-word-count.js.map