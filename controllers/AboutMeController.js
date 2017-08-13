import Controller from 'similar-server/dist/controller';
import Model from 'similar-server/dist/model';
import { RenderView } from 'similar-server/dist/view';

class AboutMeController extends Controller {
    @RenderView('aboutme.html')
    GET(req, res, next, params) {
        return new Model();
    }
}

export default AboutMeController;