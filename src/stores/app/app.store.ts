import { Store } from '@lumieslab/stasho';
import { AppState } from './app.interfaces';
import { CombinedContext } from '@lumieslab/stasho/dist/interfaces/context-typing';
import { appEffects } from './app.effects';
import { buttonState } from '../buttons/buttons.store';
import { buttonMemories } from '../buttons/buttons. memories';
import { buttonReducer } from '../buttons/buttons.reducer';
import { feedState } from '../feed/feed.store';



const state: AppState = {
    buttonState,
    feedState
}

export function getStore() {
    return Store<AppState>(state, [...buttonReducer], [...buttonMemories], [...appEffects], {} as CombinedContext);
}