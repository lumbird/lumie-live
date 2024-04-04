import { AppState } from "../app/app.interfaces";
import { ButtonState } from "./buttons.interface";

export function buttonsMemory(buttonState: AppState) {
    return buttonState.buttonState.buttons;
}

export function selectedButtonIdMemory(buttonState: AppState) {
    return buttonState.buttonState.selectedButtonId;
}

export const buttonMemories = [
    buttonsMemory,
    selectedButtonIdMemory
]