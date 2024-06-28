import { fragment, li, ul } from '@lumieslab/skribl';
import { getStore } from '../../stores/store/app.store';
import { buttonsMemory, routeMemory } from '../../stores/memories';
import { gotoLocationRouteAction } from '../../stores/actions';

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