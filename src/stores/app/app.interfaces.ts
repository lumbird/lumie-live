import { ButtonState } from "../buttons/buttons.interface";
import { FeedState } from '../feed/feed.interface';
import { RouteState } from '../route/route.interface';

export interface AppState {
    buttonState: ButtonState;
    feedState: FeedState;
    routeState: RouteState;
}