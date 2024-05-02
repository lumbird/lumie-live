import { AppState } from '../app/app.interfaces';
import { Action } from '@lumieslab/stasho/dist/interfaces/store-interfaces';
import { filteredReducer } from '@lumieslab/stasho';
import { goBackAction, gotoLocationRouteAction, gotoLocationRoutePathAction } from './route.action';

const gotoRoutePathReducer = filteredReducer([
    gotoLocationRoutePathAction
], (state: AppState, action: ReturnType<typeof gotoLocationRoutePathAction>) => {
    const route = action.routePath.split(state.routeState.delimiter);

    state.routeState = {
        ... state.routeState,
        route: route,
        routePath: action.routePath
    }

    console.log('recalc1');

    return state;
});

const gotoRouteReducer = filteredReducer([
    gotoLocationRouteAction
], (state: AppState, action: ReturnType<typeof gotoLocationRouteAction>) => {

    const actionRoute = Array.from(action.route)
    const routePath = actionRoute.join(state.routeState.delimiter);

    state.routeState = Object.assign({}, state.routeState, {
        route: actionRoute,
        routePath: routePath
    });

    return state;
});

const goBackReducer = filteredReducer([
    goBackAction
], (state: AppState, action: Action) => {

    if(state.routeState.route.length > 0) {
        state.routeState.route.pop();

        state.routeState = {
            ... state.routeState,
            route: state.routeState.route,
            routePath: state.routeState.route.join(state.routeState.delimiter)
        }
    }

    return state;
});

export const routeReducers = [gotoRoutePathReducer, gotoRouteReducer, goBackReducer];