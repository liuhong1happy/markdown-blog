const fs = require("fs");
const path = require("path");


const readDir = function(dir) {
    let mdFileList = [];
    const list = fs.readdirSync(dir);
    list.forEach(item=>{
        const mdFilePath = dir+"/"+item;
        const stat = fs.statSync(mdFilePath);
        const extname = path.extname(mdFilePath);
        if(stat.isDirectory()) {
            mdFileList = mdFileList.concat(readDir(mdFilePath));
        } else {
            if(extname===".md") mdFileList.push(mdFilePath)
        }
    })
    return mdFileList;
}

const parseFileList = function(assetsDir, fileList) {
    return fileList.map(file=> {
        const content = fs.readFileSync(file, 'utf-8');
        const reg = /^\<\!\-\-\$\$json\$\$([\s\S]*?)\-\-\>/gm;
        const result = reg.exec(content);
        const data = {
            path: file.replace(`${assetsDir}`, "")
        };

        const fileComment = result[1] ? JSON.parse(result[1].replace("\n", "")) : {};
        const fileStatus = fs.statSync(file);
        const fileContent = fs.content;
        ["date", "title", "subtitle", "tags", "author", "resource"].forEach(key=>{
            switch(key) {
                case "date":
                    data["date"] = new Date(fileComment.date || fileStatus.mtime);
                    break;
                case "title":
                    data["title"] = fileComment.title || path.basename(file, ".md");
                    break;
                case "subtitle":
                    data["subtitle"] = fileComment.subtitle || "";
                    break;
                case "tags":
                    data["tags"] = fileComment.tags || [];
                    break;
                case "author":
                    data["author"] = fileComment.author || "admin";
                    break;
                case "resource":
                    data["resource"] = fileComment.resource || "";
                    break;
            }
        })
        
        return data;
    })
}

const ParseBlogList = function(assetsDir) {
    readDir(assetsDir)
    const fileList = parseFileList(assetsDir, readDir(assetsDir));
    fileList.sort((a,b)=>new Date(a.date)<new Date(b.date));
    const json = JSON.stringify(fileList, null, 4);
    fs.writeFileSync("assets/files.json", json, 'utf-8');
}

ParseBlogList("posts");