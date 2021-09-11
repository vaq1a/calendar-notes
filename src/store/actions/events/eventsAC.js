import {usersApi} from "../../../api/usersAPI";
import {eventsTypes} from "../../types/events/eventsTypes";

export const eventsActionCreators = {
    fetchUsers: () => async (dispatch) => {
        const response = await usersApi.getUsers();
        dispatch(eventsActionCreators.setUsers(response.data));
    },
    fetchEvents: () => (dispatch) => {
      if(localStorage.getItem('events')) {
          const events = JSON.parse(localStorage.getItem('events'));
          dispatch(eventsActionCreators.setEvents(events));
      } else {
          localStorage.setItem('events', JSON.stringify([]));
      }
    },
    setUsers: (payload) => {
        return {
            type: eventsTypes.SET_USERS,
            payload,

        }
    },
    setEvents: (payload) => {
        return {
            type: eventsTypes.SET_EVENTS,
            payload,

        }
    },
    addNewEvent: (payload) => {
        return {
            type: eventsTypes.ADD_EVENT,
            payload,

        }
    },
    addEvent: (payload) => (dispatch) => {
        dispatch(eventsActionCreators.addNewEvent(payload));
        if(localStorage.getItem('events')) {
           let events = JSON.parse(localStorage.getItem('events'));
           events.push(payload);
           localStorage.setItem('events', JSON.stringify(events));
        }
    }
}