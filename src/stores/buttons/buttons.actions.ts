import { actionWithParams } from "@lumieslab/stasho";

export const selectButtonAction = actionWithParams<{ selection: string }>('[BUTTON] Select Button');