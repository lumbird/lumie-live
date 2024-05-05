import { AppState } from '../app/app.interfaces';

export function postsMemory(appState: AppState) {
    return appState.feedState.posts;
}

export const feedMemories = [postsMemory];