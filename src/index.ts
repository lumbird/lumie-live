
import { div, button, fragment, ul, li, img, span } from "@lumieslab/skribl";
import { headerContainer } from './atoms/header-container';
import { buttonContainer } from './atoms/button-container';
import { liveStatus } from './atoms/live-status';
import { bodyContainer } from './atoms/body-container';

const mainPage = () => {
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


const root = document.getElementById("root");
root?.appendChild(mainPage());