import { fragment, li, ul } from '@lumieslab/skribl';

export function buttonContainer(): HTMLElement {
    return ul({class: 'button-container theme-color-primary'},
        li({class: 'active'}, fragment('Feed')),
        li({}, fragment('Gallery')),
        li({}, fragment('Projects')),
    );
}