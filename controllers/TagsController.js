import Controller from 'similar-server/dist/controller';
import Model from 'similar-server/dist/model';
import { RenderView } from 'similar-server/dist/view';

class TagsController extends Controller {
    @RenderView('tags.html')
    GET(req, res, next, params) {
        return new Model();
    }
}

export default TagsController;