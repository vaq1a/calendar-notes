import Login from "../pages/Login";
import Event from "../pages/Event";

export const routeNames = {
    login: '/login',
    calendar: '/calendar',

}

export const publicRouters = [
    {
        path: routeNames.login,
        exact: true,
        component: Login,

    }
];

export const privateRouters = [
    {
        path: routeNames.calendar,
        exact: true,
        component: Event,

    }
];