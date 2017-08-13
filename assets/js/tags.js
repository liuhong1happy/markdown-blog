var parseTagsToHtml = function(objTags) {
    var articles = document.getElementById('tags');
    Object.keys(objTags).forEach(tag=>{
        var count = objTags[tag];
        var item = document.createElement('li');
        item.classList.add("tag-box");
        item.innerHTML = `<a href="#tag#${tag}">${tag}<span>${count}</span></a>`;
        articles.appendChild(item);
    })
} 

var parseTagsPostsToHtml = function(objTags, files) {
    var mainContainer = document.getElementById('mainContainer');
    Object.keys(objTags).forEach(tag=>{
        var _files = files.filter(function(file){  return file.tags.indexOf(tag)!==-1; });
        var postContainer = document.createElement("div");
        postContainer.classList.add("main-section");
        postContainer.innerHTML = 
            `
                <h2 id="tag#${tag}">${tag}</h2>
                <ul id="posts#${tag}" class="posts"> 
                ${_files.map(function(_file){ 
                    var date = new Date(_file.date);
                    return `<li><span>${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日</span> » <a href="/post?url=/${_file.path}">${_file.title}</a></li>` 
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
        parseTagsToHtml(data.tags);
        parseTagsPostsToHtml(data.tags, data.files);
        if(location.hash) {
            var arr = location.hash.split('#');
            var tag = arr[arr.length-1];
            var a = document.createElement('a');
            a.href = "#tag#"+tag;
            a.click();
        }
    }
})