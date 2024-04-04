import { actionWithParams } from "@lumieslab/stasho";

export type SelectButtonData = { selection: string };
export const selectButtonActionType = '[BUTTON] Select Button';
export const selectButtonAction = actionWithParams<SelectButtonData>(selectButtonActionType);