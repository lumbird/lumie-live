import { combinedReducers, filteredReducer, subReducer } from '@lumieslab/stasho';
import { AppState } from './interfaces/app.interfaces';
import { Action, StoreDef } from '@lumieslab/stasho/dist/interfaces/store-interfaces';
import { selectButtonAction, goBackAction, gotoLocationRouteAction, gotoLocationRoutePathAction } from './actions';

// ##### Buttons
const buttonReducer = subReducer<AppState, 'buttonState', Action & any>('buttonState',
    filteredReducer([selectButtonAction], function(appState, action: ReturnType<typeof selectButtonAction>) {
        return {
            ...appState,
            selectedButtonId: action.selection
        }
    })
);

// ##### Route
const routeReducer = subReducer<AppState, 'routeState', Action & any>('routeState',
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

export function connectReducers(store: StoreDef<AppState>) {
    store.attachReducer(buttonReducer);
    store.attachReducer(routeReducer);
}