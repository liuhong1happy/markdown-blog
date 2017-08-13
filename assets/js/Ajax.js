window.Ajax = function(options) {

   options.progress = options.progress || function(){};
   options.load = options.progress || function(){};
   options.error = options.progress || function(){};
   options.abort = options.progress || function(){};
   options.headers = options.headers || {};

   var xhr = new XMLHttpRequest();
    
   xhr.addEventListener("progress", options.progress, false);
   xhr.addEventListener("load", options.load, false);
   xhr.addEventListener("error", options.error, false);
   xhr.addEventListener("abort", options.abort, false);
    
   xhr.open(options.type || 'GET', options.url);
   xhr.onload = function() {
     if (this.status == 200) {
        options.success(this.response);
     }
   };
   Object.keys(options.headers).forEach(function(key){
     var value = options.headers[key];
     xhr.setRequestHeader(key, value);
   })
   
   xhr.send();
}