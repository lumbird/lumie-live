
import { div, button, fragment, ul, li, img } from "@lumieslab/skribl";


const container = (children: HTMLElement) => {
    return div({class: 'flex-row flex-jc-center full-width'}, children);
}
const mainPage = () => {



    return container(div(
            {class: 'app-content flex-column full-width m-2 flex-gap-1 width-7f'},
            // Header container 
            div({class: 'flex-row flex-ai-center flex-jc-center flex-gap-1 flex-wrap'},

                // Logo container
                div({class: 'thumbnail'}, img({src: './assets/images/profile.jpg'})),

                // Header container
                div({class: 'flex-row flex-ai-center'},
                    div({class: 'title-font font-black font-italic font-size-3 text-no-wrap'},
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
            ul({class: 'flex-row flex-jc-spaced full-width theme-color-primary font-bold'},
                li({class: 'mr-1 active'}, fragment('Feed')),
                li({class: 'mr-1'}, fragment('Gallery')),
                li({}, fragment('Projects')),
            ),

            // Body content container
            div({class: 'full-width'},),
        ));
}


const root = document.getElementById("root");
root?.appendChild(mainPage());