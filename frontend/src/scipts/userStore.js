import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({ username : 'Guest', email : 'guest@gmail.com' }),
    actions: {
        changeName(name) {
            this.username = name
        },
        changeEmail(email) {
            this.email = email
        }
    },
    persist: true
})