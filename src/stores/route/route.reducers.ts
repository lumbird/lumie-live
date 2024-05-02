import { AppState } from '../app/app.interfaces';
import { Action } from '@lumieslab/stasho/dist/interfaces/store-interfaces';
import { combinedReducers, filteredReducer, subReducer } from '@lumieslab/stasho';
import { goBackAction, gotoLocationRouteAction, gotoLocationRoutePathAction } from './route.action';

export const routeReducers = subReducer<AppState, 'routeState', Action & any>('routeState', 
    combinedReducers(

        // Routing that using a string based path
        filteredReducer([
            gotoLocationRoutePathAction
        ], (state, action: ReturnType<typeof gotoLocationRoutePathAction>) => {
            const route = action.routePath.split(state.delimiter);
            return {
                ... state,
                route: route,
                routePath: action.routePath
            }
        }),

        // Routing without using a string opath
        filteredReducer([
            gotoLocationRouteAction
        ], (state, action: ReturnType<typeof gotoLocationRouteAction>) => {
            const actionRoute = Array.from(action.route)
            const routePath = actionRoute.join(state.delimiter);
        
            return {
                ...state,
                route: actionRoute,
                routePath: routePath
            }
        }),

        // Action that navigates back to the previous page
        filteredReducer([
            goBackAction
        ], (state, action: Action) => {
        
            if(state.route.length > 0) {
                state.route.pop();
        
                return {
                    ... state,
                    route: state.route,
                    routePath: state.route.join(state.delimiter)
                }
            }
        
            return state;
        })
    ),
);