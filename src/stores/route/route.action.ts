import { actionWithoutParams, actionWithParams } from '@lumieslab/stasho';


export const gotoLocationRoutePathAction = actionWithParams<{ routePath: '' }>('[ROUTE] goto route to path');
export const gotoLocationRouteAction = actionWithParams<{ route: [] }>('[ROUTE] goto route');
export const goBackAction = actionWithoutParams('[ROUTE] goto route');