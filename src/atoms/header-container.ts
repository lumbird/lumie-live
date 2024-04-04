import { div, fragment, img } from '@lumieslab/skribl';

export function headerContainer(): HTMLElement {
    return div({class: 'header-container'},

        // Logo container
        div({class: 'logo-content'}, img({src: './assets/images/profile.jpg'})),

        // Header container
        div({class: 'title-content'},
            div({class: 'title'},
                fragment('Lumies Lab')
            ),
        ),
    )
}