import { AppState } from './interfaces/app.interfaces';
import { StoreDef } from '@lumieslab/stasho/dist/interfaces/store-interfaces';

const getRouteState = (state: AppState) => state.routeState;
const getFeedState = (state: AppState) => state.feedState;
const getButtonState = (state: AppState) => state.buttonState;

// #### Route
export const routeMemory = (state: AppState) => getRouteState(state).route;
export const routePathMemory = (state: AppState) => getRouteState(state).routePath;
export const routeDelimeterMemory = (state: AppState) => getRouteState(state).delimiter;
// ##### Feed
export const postsMemory = (appState: AppState) => getFeedState(appState).posts;
// ##### Buttons
export const buttonsMemory = (appState: AppState) => getButtonState(appState).buttons;
export const selectedButtonIdMemory = (state: AppState) => getButtonState(state).selectedButtonId;

export const connectMemories = function(store: StoreDef<AppState>) {
    store.attachMemory(routeMemory);
    store.attachMemory(routePathMemory);
    store.attachMemory(routeDelimeterMemory);
    store.attachMemory(postsMemory);
    store.attachMemory(buttonsMemory);
    store.attachMemory(selectedButtonIdMemory);
}