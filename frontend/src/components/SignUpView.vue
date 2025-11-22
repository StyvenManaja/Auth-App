<script setup>
    import axios from 'axios'
    import { ref } from 'vue'
    import { useUserStore } from '@/scipts/userStore'
    import { useRouter } from 'vue-router'

    const backend_url = import.meta.env.VITE_BACKEND_URL
    const userStore = useUserStore()
    const router = useRouter()

    const username = ref('')
    const email = ref('')
    const password = ref('')

    async function signup() {
        try {
            const res = await axios.post(`${backend_url}/user/signup`,
                {
                    username: username.value,
                    email: email.value,
                    password: password.value
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if(res.data.status === 'success') {
                userStore.changeName(res.data.data.user.username)
                router.push('/')
            }

        } catch (error) {
            console.log('Unexpected error occured.')
        }
    }
</script>

<template>
    <div class="container">
        <h1>Please sign up to continue</h1>

        <form @submit.prevent="signup">
            <div class="form-wrapper">
                <input
                    v-model="username"
                    type="text"
                    placeholder="Enter your username here"
                    required
                    minlength="6"
                />

                <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email here"
                    required
                />

                <input
                    v-model="password"
                    type="password"
                    placeholder="Enter your password here"
                    required
                    minlength="8"
                />

                <input type="submit" value="Sign Up" />
            </div>
        </form>

        <p>Already has an account?</p>
    </div>
</template>
