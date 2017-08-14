var searchParams = new URLSearchParams(location.search);
var url = searchParams.get("url");

window.Ajax({
    url: url,
    success: function(html) {
        if(html) {
            document.getElementById("mainContainer").innerHTML = html;
        }
    }
})

window.Ajax({
    url: "/post?url="+url,
    type: "post",
    success: function(res) {
        const files = JSON.parse(res);
        if(files.length>0) {
            document.getElementById("postTitle").innerHTML = `${files[0].title || ""}<small>${files[0].subtitle || ""}</small>`
            document.getElementById("postDate").innerHTML = `最新更新时间：${new Date(files[0].date).Format("yyyy年MM月dd日") || ""}`
            document.getElementById("postAuthor").innerHTML = `作者：${files[0].author || ""}`
        }
    }
})