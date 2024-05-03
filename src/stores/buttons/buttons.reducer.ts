import { Action } from "@lumieslab/stasho/dist/interfaces/store-interfaces";
import { AppState } from "../app/app.interfaces";
import { selectButtonAction } from "./buttons.actions";
import { subReducer, filteredReducer } from '@lumieslab/stasho';

export const buttonReducer = subReducer<AppState, 'buttonState', Action & any>('buttonState',
    filteredReducer([selectButtonAction], function(appState, action: ReturnType<typeof selectButtonAction>) {
        return {
            ...appState,
            selectedButtonId: action.selection
        }
    })
);