import Controller from 'similar-server/dist/controller';
import Model from 'similar-server/dist/model';
import { RenderView, RenderAPI } from 'similar-server/dist/view';
import fs from 'fs';
import { URL } from 'url';

class PostController extends Controller {
    @RenderView('post.html')
    GET(req, res, next, params) {
        return new Model();
    }

    @RenderAPI()
    POST(req, res, next, params) {
        const files = JSON.parse(fs.readFileSync('assets/files.json'));
        const url = new URL(req.url, 'http://example.com')
        console.log(url.searchParams.get("url"));
        const results = files.filter(function(file){ return file.path == url.searchParams.get("url")});
        const resultModel = new Model();
        resultModel.setData(results);
        return resultModel;
    }

}

export default PostController;