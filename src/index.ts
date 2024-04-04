
import { div, button, fragment, ul, li, img } from "@lumieslab/skribl";


const container = (children: HTMLElement) => {
    return div(
        {
            class: 'app-root'
        },
            div({ class: 'app-container'}, children)
        );
}
const mainPage = () => {



    return container(div(
            {class: 'app-content theme-color-background-layer-1 background'},
            // Header container 
            div({class: 'header-container'},

                // Logo container
                div({class: 'logo-content'}, img({src: './assets/images/profile.jpg'})),

                // Header container
                div({class: 'title-content'},
                    div({class: 'title'},
                        fragment('Lumies Lab')
                    ),
                ),
            ),

            // // Live status
            // div({class: 'full-width mb-1'},
            //     li( {
            //         class: 'fa-brands fa-youtube',
            //         style: 'color: red'
            //     }),
            //     div({  }, fragment('')),
            //     div({  }, fragment('')),
            // ),

            // Buttons container
            ul({class: 'button-container theme-color-primary'},
                li({class: 'active'}, fragment('Feed')),
                li({}, fragment('Gallery')),
                li({}, fragment('Projects')),
            ),

            // Body content container
            div({class: 'body-container full-width'},),
        ));
}


const root = document.getElementById("root");
root?.appendChild(mainPage());