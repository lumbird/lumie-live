export interface FeedState {
    posts: Post[];
}

export interface Post {
    title: string;
    message: string;
    embeddings: unknown[];
    attachments: unknown[];
}