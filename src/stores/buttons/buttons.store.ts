import { ButtonState } from "./buttons.interface";

export const buttonState: ButtonState = {
    buttons: [
        { id: 'feed', name: 'Feed' },
        { id: 'gallery', name: 'Gallery' },
        { id: 'projects', name: 'Projects' }
    ],
    selectedButtonId: 'feed'
}