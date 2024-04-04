export interface Button {
    id: string;
    name: string;
}


export interface ButtonState {
    buttons: Button[];
    selectedButtonId: string;
}