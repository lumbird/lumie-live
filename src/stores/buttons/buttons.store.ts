import { ButtonState } from "./buttons.interface";

export const buttonState: ButtonState = {
    buttons: [
        { id: 'feed', name: 'Feed', path: 'feed' },
        { id: 'gallery', name: 'Gallery', path: 'gallery' },
        { id: 'projects', name: 'Projects', path: 'projects' }
    ],
    selectedButtonId: 'feed'
}