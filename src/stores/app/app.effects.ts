import { Action, EffectCallback } from "@lumieslab/stasho/dist/interfaces/store-interfaces";
import { compareNode } from '@lumieslab/skribl';
import { isAction } from '@lumieslab/stasho';
import { recalculateAction } from "./app.actions";
import { getStore } from '../../stores/app/app.store';
import { app as App } from "../../atoms/app";

export function renderEffect(action: Action) {
    if (isAction(action, recalculateAction())) {
        const container: HTMLElement = document.getElementById('root') as HTMLElement;
        const app: HTMLElement = App();
        const virtualContainer = container.cloneNode().appendChild(app);
        console.log(container, virtualContainer);
        container.replaceChildren(compareNode(container, virtualContainer));
    }
}

export function generalRerenderEffect(action: Action) {    
    
    console.log('dispatched', action);

    if (!isAction(action, recalculateAction())) {
        const store = getStore();
        store.dispatch(recalculateAction());
    }

}

export const appEffects: EffectCallback<any>[] = [renderEffect, generalRerenderEffect];