import { Action } from "@lumieslab/stasho/dist/interfaces/store-interfaces";
import { AppState } from "../app/app.interfaces";
import { SelectButtonData, selectButtonActionType } from "./buttons.actions";

export const selectButtonReducer = function(appState: AppState, action: Action) {

    if(action.type === selectButtonActionType) {
        const selselectButtonAction = action as SelectButtonData & Action;

            appState.buttonState = {
            ...appState.buttonState,
            selectedButtonId: selselectButtonAction.selection
        }
    }

    return appState;
}

export const buttonReducer = [
    selectButtonReducer
];