import { fragment, li, ul } from '@lumieslab/skribl';
import { getStore } from '../../stores/app/app.store';
import { buttonsMemory, selectedButtonIdMemory } from '../../stores/buttons/buttons. memories';
import { selectButtonAction } from '../../stores/buttons/buttons.actions';

export function buttonContainer(): HTMLElement {


    const store = getStore();

    const buttons = store.getMemory(buttonsMemory);
    const selectedButtonId = store.getMemory(selectedButtonIdMemory);

    return ul({class: 'button-container theme-color-primary'},
        ...buttons.map((button) => {
            const liE = li({ class: selectedButtonId == button.id ? 'active' : ''
            }, fragment(button.name));

            liE.addEventListener('click', () => {
                store.dispatch(
                    selectButtonAction({selection: button.id})
                )
            });

            return liE;
        })
    );
}