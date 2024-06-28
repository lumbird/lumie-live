import { Store } from '@lumieslab/stasho';
import { AppState } from '../interfaces/app.interfaces';
import { feedState } from './feed.store';
import { routeState } from './route.store';
import { buttonState } from './buttons.store';
import { connectReducers } from '../reducers';
import { connectMemories } from '../memories';
import { connectEffects } from '../effects';

const state: AppState = {
    buttonState,
    feedState,
    routeState
}

const store = Store<AppState>(state);

connectReducers(store);
connectMemories(store);
connectEffects(store);

export function getStore() {
    return store;
}