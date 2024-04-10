import { div } from '@lumieslab/skribl';

export function chatItem(
    title: string,
    content: string,
    embeddings: unknown[],
    attachments: unknown[],
): HTMLElement {
    return div({class: 'thumbnail'});
}