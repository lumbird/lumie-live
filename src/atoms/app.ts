import { div, button, fragment, ul, li, img, span } from "@lumieslab/skribl";
import { headerContainer } from './header-container';
import { buttonContainer } from './button-container';
import { liveStatus } from './live-status';
import { bodyContainer } from './body-container';

export function app(): HTMLElement {
    return div({ class: 'app-root' },
        div({ class: 'app-container'},
            div({ class: 'app-content theme-color-background-layer-1 background' },
                // Header container
                headerContainer(),

                // Live status
                liveStatus(),

                // Buttons container
                buttonContainer(),

                // Body content container
                bodyContainer()
            )
        )
    );
}