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