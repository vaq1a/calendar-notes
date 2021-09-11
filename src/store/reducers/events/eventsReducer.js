import {eventsTypes} from "../../types/events/eventsTypes";

const initialState = {
    users: [],
    events: [],

}

export const eventsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case eventsTypes.SET_USERS:
            return {
                ...state,
                users: payload,

            }
        case eventsTypes.SET_EVENTS:
            return {
                ...state,
                events: payload,

            }
        case eventsTypes.ADD_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }
        default:
            return state;
    }
}