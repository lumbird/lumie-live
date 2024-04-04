import { getStore } from "./stores/app/app.store";
import { recalculateAction } from "./stores/app/app.actions";

const store = getStore();
store.dispatch(recalculateAction());