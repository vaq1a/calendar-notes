import axios from "axios";

export const usersApi = {
    getUsers: () => axios.get('./users.json'),

}