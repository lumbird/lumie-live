import { div } from '@lumieslab/skribl';
import { chatItem } from '../items/chat-item';
import { getStore } from '../../stores/store/app.store';
import { postsMemory } from '../../stores/memories';

export function feedContent(): HTMLElement {

    const store = getStore();
    const posts = store.getMemory(postsMemory);

    return div({class: 'feed'},
        ...posts.map((post) => {
            return chatItem(post.title, post.message, post.embeddings, post.attachments, post.timestamp);
        })
    );

}