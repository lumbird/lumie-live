import { div, fragment, li, span } from '@lumieslab/skribl';

export function liveStatus(): HTMLElement {
    return div({class: 'live-status'},
        li( {
            class: 'fa-brands fa-youtube'
        }),
        div({ class: 'status-subtitle'  }, fragment('LISTENING TOO')),
        div({ class: 'status-message' },
            span({ class: 'scroll-text' }, fragment('The Prodigy - Invaders Must Die'))
        ),
    );
}