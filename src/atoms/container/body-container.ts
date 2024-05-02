import { div } from '@lumieslab/skribl';
import { getStore } from '../../stores/app/app.store';
import { routeMemory } from '../../stores/route/route.memories';

export function contentFromRoute(route: string) {
    switch (route) {
        default:
            return div({class: 'item'},);
    }
}

export function bodyContainer(): HTMLElement {

    const store = getStore();
    const routes = store.getMemory(routeMemory);
    return div({class: 'body-container full-width'},
        contentFromRoute(routes[0])
    );
}