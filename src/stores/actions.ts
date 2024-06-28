import { actionWithoutParams, actionWithParams } from '@lumieslab/stasho';

// ##### App
export const recalculateAction = actionWithoutParams('[recalculate] Rebuild Webpage');

// ##### Buttons
export const selectButtonAction = actionWithParams<{ selection: string }>('[BUTTON] Select Button');

// ##### Route
export const gotoLocationRoutePathAction = actionWithParams<{ routePath: '' }>('[ROUTE] goto route to path');
export const gotoLocationRouteAction = actionWithParams<{ route: string[] }>('[ROUTE] goto route');
export const goBackAction = actionWithoutParams('[ROUTE] goto back');