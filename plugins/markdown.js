import url from 'url';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

// Synchronous highlighting with highlight.js
marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
});

const MarkdownPlugin = function(assetsDir) {
    return function Markdown(request, response, next) {
        const obj = url.parse(request.url);
        const pathname = obj.pathname;
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