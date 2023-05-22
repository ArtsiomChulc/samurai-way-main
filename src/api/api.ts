import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c66375a5-3797-46a9-b30d-f3150f894b7a"
    }
})

export const usersAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
    },
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollowStatus(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    deleteFollowStatus(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}



