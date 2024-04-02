
import { div, button, fragment } from "@lumieslab/skribl";


const mainPage = () => {
    return div(
            {class: 'flex-column full-width'},
            // Header container 
            div({class: 'full-width height-10l'},),

            // Buttons container
            div({class: 'full-width theme-color-primary'},
                button({class: 'm-1'}, fragment('Button 1')),
                button({class: 'm-1'}, fragment('Button 2')),
                button({class: 'm-1'}, fragment('Button 3')),
                button({class: 'm-1'}, fragment('Button 4')),
            ),

            // Body content container
            div({class: 'full-width'},),
        );
}


const root = document.getElementById("root");
root?.appendChild(mainPage());