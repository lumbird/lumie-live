import { fragment, li, ul } from '@lumieslab/skribl';
import { getStore } from '../../stores/app/app.store';
import { buttonsMemory } from '../../stores/buttons/buttons. memories';
import { gotoLocationRouteAction, gotoLocationRoutePathAction } from '../../stores/route/route.action';
import { routeMemory } from '../../stores/route/route.memories';

export function buttonContainer(): HTMLElement {


    const store = getStore();

    const buttons = store.getMemory(buttonsMemory);
    const route = store.getMemory(routeMemory);
    console.log('got route', route);
    return ul({class: 'button-container theme-color-primary'},
        ...buttons.map((button) => {
            const liE = li({ class: route[0] == button.id ? 'active' : ''
            }, fragment(button.name));

            liE.addEventListener('click', () => {
                store.dispatch(
                    gotoLocationRouteAction({ route: [button.id.toString()] })
                )
            });

            return liE;
        })
    );
}