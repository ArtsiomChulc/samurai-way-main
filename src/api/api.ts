import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c66375a5-3797-46a9-b30d-f3150f894b7a"
    }
})

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data)
    },

}

export const usersAPI = {
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





