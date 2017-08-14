var parseFilesToHtml = function(files){
    var articles = document.getElementById('articles');
    files.forEach(function(file){
        var item = document.createElement('li');
        var date = new Date(file.date);
        item.innerHTML = `<span>${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日</span> » <a href="/post?url=${file.path}">${file.title}</a>`;
        articles.appendChild(item);
    })
}

var parseTagsToHtml = function(objTags) {
    var articles = document.getElementById('tags');
    Object.keys(objTags).forEach(tag=>{
        var count = objTags[tag];
        var item = document.createElement('li');
        item.classList.add("tag-box");
        item.innerHTML = `<a href="/tags#tag#${tag}">${tag}<span>${count}</span></a>`;
        articles.appendChild(item);
    })
} 

var parseArchiveToHtml = function(objArchives) {
    var articles = document.getElementById('archive');
    Object.keys(objArchives).forEach(tag=>{
        var count = objArchives[tag];
        var item = document.createElement('li');
        item.classList.add("tag-box");
        item.innerHTML = `<a href="/archive#archive#${tag}">${tag}年<span>${count}</span></a>`;
        articles.appendChild(item);
    })
} 

window.Ajax({
    url: "/files.json",
    success: function(files) {
        var data = window.ParseData(JSON.parse(files));
        parseFilesToHtml(data.files);
        parseTagsToHtml(data.tags);
        parseArchiveToHtml(data.archive.year);
    }
})