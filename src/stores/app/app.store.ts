import { Store } from '@lumieslab/stasho';
import { AppStore } from './app.interfaces';
import { CombinedContext } from '@lumieslab/stasho/dist/interfaces/context-typing';
import { appEffects } from './app.effects';

export function getStore() {
    return Store<AppStore>({}, [], [], [...appEffects], {} as CombinedContext);
}