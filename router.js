import { Route, Router } from 'similar-server';
import HomeController from './controllers/HomeController';
import PostController from './controllers/PostController';
import ArchiveController from './controllers/ArchiveController';
import TagsController from './controllers/TagsController';
import AboutMeController from './controllers/AboutMeController';

export default Router('/',[
    Route('', new HomeController()),
    Route('tags', new TagsController()),
    Route('archive', new ArchiveController()),
    Route('post', new PostController()),
    Route('aboutme', new AboutMeController())
]);