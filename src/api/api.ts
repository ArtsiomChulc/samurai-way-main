import axios from "axios";
import { ProfileType } from "Redux/profile-reducer";

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
    async getAuthMe() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        const response = await instance.post(`auth/login`, { email, password, rememberMe, captcha });
        return response.data;
    },
    async logOut() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },
    async getCaptcha() {
        const response = await instance.get("security/get-captcha-url");
        return response.data;
    },
};

export const profileAPI = {
    async getProfile(userId: string) {
        const response = await instance.get(`profile/` + userId);
        return response.data;
    },
    async getStatus(userId: string) {
        const response = await instance.get(`/profile/status/${userId}`);
        return response.data;
    },
    async updateStatus(status: string) {
        const response = await instance.put<ApiType>(`/profile/status`, { status: status });
        return response.data;
    },
    async savePhoto(file: File) {
        const formData = new FormData();
        formData.append("image", file);
        const response = await instance.put(`/profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    },
    async saveProfile(profile: ProfileType) {
        const response = await instance.put<ApiType>(`/profile`, profile);
        return response.data;
    },
};

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async postFollowStatus(id: number): Promise<ApiType> {
        const response = await instance.post<ApiType>(`follow/${id}`, {});
        return response.data;
    },
    async deleteFollowStatus(id: number) {
        const response = await instance.delete<ApiType>(`follow/${id}`);
        return response.data;
    },
};
