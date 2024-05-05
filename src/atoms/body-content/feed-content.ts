import { div } from '@lumieslab/skribl';
import { getStore } from '../../stores/app/app.store';
import { postsMemory } from '../../stores/feed/feed.memories';
import { chatItem } from '../items/chat-item';

export function feedContent(): HTMLElement {

    const store = getStore();
    const posts = store.getMemory(postsMemory);

    return div({class: 'feed'},
        ...posts.map((post) => {
            return chatItem(post.title, post.message, post.embeddings, post.attachments, post.timestamp);
        })
    );

}