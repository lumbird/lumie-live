import { div, fragment, img, span } from '@lumieslab/skribl';
import moment from 'moment';

export function chatItem(
    title: string,
    content: string,
    embeddings: unknown[],
    attachments: unknown[],
    timestamp: string,
): HTMLElement {
    return div({class: 'feed-message'},
        div({ class: 'feed-header' },
            img({ class: 'feed-thumbnail', src: './assets/images/profile.jpg' }),
            div({ class: 'feed-title' },
                div({ class: 'title' }, fragment(title)),
                div({ class: 'timestamp' }, fragment(
                    moment(timestamp).fromNow()
                )),
            ),
        ),
        div({ class: 'feed-content' }, fragment(content))
    );
}