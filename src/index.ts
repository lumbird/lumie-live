import { getStore } from './stores/store/app.store';
import { recalculateAction } from './stores/actions';

const store = getStore();
store.dispatch(recalculateAction());