export interface Button {
    id: string;
    name: string;
    path: string;
}

export interface ButtonState {
    buttons: Button[];
    selectedButtonId: string;
}