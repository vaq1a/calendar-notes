import {authActionCreators} from "./auth/authAC";
import {eventsActionCreators} from "./events/eventsAC";

export const allActionCreator = {
    ...authActionCreators,
    ...eventsActionCreators,

}