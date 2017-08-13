var parseArchiveToHtml = function(objArchives) {
    var articles = document.getElementById('archive');
    Object.keys(objArchives).forEach(tag=>{
        var count = objArchives[tag];
        var item = document.createElement('li');
        item.classList.add("tag-box");
        item.innerHTML = `<a href="#archive#${tag}">${tag}年<span>${count}</span></a>`;
        articles.appendChild(item);
    })
} 

var parseArchivePostsToHtml = function(objArchives, files) {
    var mainContainer = document.getElementById('mainContainer');
    Object.keys(objArchives).forEach(tag=>{
        var _files = files.filter(function(file){  
            var date = new Date(file.date);
            return date.getFullYear()==tag; 
        });
        var postContainer = document.createElement("div");
        postContainer.classList.add("main-section");
        postContainer.innerHTML = 
            `
                <h2 id="tag#${tag}年">${tag}年</h2>
                <ul id="posts#${tag}年" class="posts"> 
                ${_files.map(function(_file){ 
                    var date = new Date(_file.date);
                    return `<li><span>${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日</span> » <a href="/post/?url=/${_file.path}">${_file.title}</a></li>` 
                })}
                </ul>
            `;
        mainContainer.appendChild(postContainer);
    })
}

window.Ajax({
    url: "/files.json",
    success: function(files) {
        var data = window.ParseData(JSON.parse(files));
        parseArchiveToHtml(data.archive.year);
        parseArchivePostsToHtml(data.archive.year, data.files);
        if(location.hash) {
            var arr = location.hash.split('#');
            var tag = arr[arr.length-1];
            var a = document.createElement('a');
            a.href = "#tag#"+tag;
            a.click();
        }
    }
})