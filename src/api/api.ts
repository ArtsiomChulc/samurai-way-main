import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c66375a5-3797-46a9-b30d-f3150f894b7a",
    },
});

export type ApiType = {
    resultCode: number;
    messages: string[];
    data: {};
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then((response) => response.data);
    },
    logOut() {
        return instance.delete(`auth/login`).then((response) => response.data);
    },
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId).then((response) => response.data);
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`).then((response) => response.data);
    },
    updateStatus(status: string) {
        return instance.put<ApiType>(`/profile/status`, { status: status }).then((response) => response.data);
    },
    savePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file);
        return instance
            .put(`/profile/photo/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
};

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },
    postFollowStatus(id: number): Promise<ApiType> {
        return instance.post<ApiType>(`follow/${id}`, {}).then((response) => response.data);
    },
    deleteFollowStatus(id: number) {
        return instance.delete<ApiType>(`follow/${id}`).then((response) => response.data);
    },
};
