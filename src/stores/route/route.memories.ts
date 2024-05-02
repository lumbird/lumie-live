import { AppState } from '../app/app.interfaces';

const getRouteState = (state: AppState) => state.routeState;

export const routeMemory = (state: AppState) => getRouteState(state).route;
export const routePathMemory = (state: AppState) => getRouteState(state).routePath;
export const routeDelimeterMemory = (state: AppState) => getRouteState(state).delimiter;

export const routeMemories = [routeMemory, routePathMemory, routeDelimeterMemory];