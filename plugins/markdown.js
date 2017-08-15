import url from 'url';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

var renderer = new marked.Renderer();

renderer.heading = function (text, level) {
 return `<h${level} id="${text}">${text}</h${level}>`;
},

renderer.link = function(href,title, text){
    return `<a href="${href}" title="${title||href}" target="_blank">${text}</a>`;
},

// Synchronous highlighting with highlight.js
marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
});



const MarkdownPlugin = function(assetsDir) {
    return function Markdown(request, response, next) {
        const obj = url.parse(request.url);
        const pathname = decodeURIComponent(obj.pathname);
        console.log(obj);
        const realPath = path.join(assetsDir, path.normalize(pathname.replace(/\.\./g, "")));
        console.log(realPath);
        const pathHandle = function(realPath){
            //用fs.stat方法获取文件
            try{
                const stats = fs.statSync(realPath);
                
                if (stats.isDirectory()) {
                    next();
                } else {
                    let ext = path.extname(realPath);
                    ext = ext ? ext.slice(1) : 'unknown';
                    if(ext!=='md') next();
                    else {
                        const str = fs.readFileSync(realPath, 'utf8');
                        response.setHeader("Content-Type", 'text/html;charset=utf-8');
                        response.write(marked.parse(str));
                        response.end();
                    }
                }
            } catch(error) {
                next();
            }
        }
        pathHandle(realPath);
    }
}

export default MarkdownPlugin;