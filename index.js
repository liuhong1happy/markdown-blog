import Application from 'similar-server/dist/application';
import Static from 'similar-server/dist/static'
import Markdown from './plugins/markdown';
import router from './router';

const app = Application();
// static plugin
app.plugin(Markdown("posts"));
app.static('assets');
// app.static("views");
app.router(router);
// init routes & plugins
app.init();
// listen 3002 port
app.listen(3002);