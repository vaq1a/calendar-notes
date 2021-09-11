import {authReducer} from "./auth/authReducer";
import {eventsReducer} from "./events/eventsReducer";

export const allReducers = {
    auth: authReducer,
    events: eventsReducer,

}