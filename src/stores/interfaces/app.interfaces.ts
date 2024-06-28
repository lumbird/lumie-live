import { ButtonState } from "./buttons.interface";
import { FeedState } from './feed.interface';
import { RouteState } from './route.interface';

export interface AppState {
    buttonState: ButtonState;
    feedState: FeedState;
    routeState: RouteState;
}