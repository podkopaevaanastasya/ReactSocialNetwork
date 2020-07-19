import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true, //отвечает за авторизованность!!!! запрос может слать только авторизованный юзер
    credential: 'include',
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{ //заголовки
        "API-KEY": "50652cfa-1a07-495a-b187-53e204e0ea1c"
    }
})

export const usersAPI = {
    getUsers: (activePage, pageSize) => {
        return instance.get(`users?page=${activePage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow: (id) => {
        return instance.delete(`follow/`+ id).then(response => response.data)
    },

    follow: (id) => {
        return instance.post(`follow/`+id, null).then(response => response.data)
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}