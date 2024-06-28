import { Action, StoreDef } from '@lumieslab/stasho/dist/interfaces/store-interfaces';
import { isAction } from '@lumieslab/stasho';
import { app as App } from '../atoms/app';
import { compareNode } from '@lumieslab/skribl';
import { AppState } from './interfaces/app.interfaces';
import { recalculateAction } from './actions';
import { getStore } from './store/app.store';

// ##### General
export function renderEffect(action: Action) {
    if (isAction(action, recalculateAction)) {
        const container: HTMLElement = document.getElementById('root') as HTMLElement;
        const app: HTMLElement = App();
        const virtualContainer = container.cloneNode().appendChild(app);
        container.replaceChildren(compareNode(container, virtualContainer));
    }
}

export function generalRerenderEffect(action: Action) {
    if (!isAction(action, recalculateAction)) {
        const store = getStore();
        store.dispatch(recalculateAction());
    }
}

export const connectEffects = function(store: StoreDef<AppState>) {
    store.attachEffect(renderEffect);
    store.attachEffect(generalRerenderEffect);
}