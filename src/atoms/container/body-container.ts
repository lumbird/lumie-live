import { div } from '@lumieslab/skribl';
import { getStore } from '../../stores/app/app.store';
import { routeMemory } from '../../stores/route/route.memories';
import { feedContent } from '../body-content/feed-content';
import { galleryContent } from '../body-content/gallery-content';
import { projectsContent } from '../body-content/projects-content';

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