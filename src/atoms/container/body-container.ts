import { div } from '@lumieslab/skribl';
import { feedContent } from '../body-content/feed-content';
import { galleryContent } from '../body-content/gallery-content';
import { projectsContent } from '../body-content/projects-content';
import { getStore } from '../../stores/store/app.store';
import { routeMemory } from '../../stores/memories';

type PageRoutes = 'feed' | 'gallery' | 'projects';

export function contentFromRoute(route: PageRoutes) {
    switch (route) {
        case "feed":
            return feedContent();
        case "gallery":
            return galleryContent();
        case "projects":
            return projectsContent();
        default:
            return div({class: 'item'},);
    }
}

export function bodyContainer(): HTMLElement {

    const store = getStore();
    const routes = store.getMemory(routeMemory);
    return div({class: 'body-container full-width'},
        contentFromRoute(routes[0] as PageRoutes)
    );
}