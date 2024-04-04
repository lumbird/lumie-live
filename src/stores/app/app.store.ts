import { Store } from '@lumieslab/stasho';
import { AppState } from './app.interfaces';
import { CombinedContext } from '@lumieslab/stasho/dist/interfaces/context-typing';
import { appEffects } from './app.effects';
import { buttonState } from '../buttons/buttons.store';
import { buttonMemories } from '../buttons/buttons. memories';
import { buttonReducer } from '../buttons/buttons.reducer';



const state: AppState = {
    buttonState
}

export function getStore() {
    return Store<AppState>(state, [...buttonReducer], [...buttonMemories], [...appEffects], {} as CombinedContext);
}