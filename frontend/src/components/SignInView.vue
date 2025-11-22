<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import { useUserStore } from '@/scipts/userStore'
    import { useRouter } from 'vue-router'

    const backend_url = import.meta.env.VITE_BACKEND_URL
    const userStore = useUserStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    async function signin() {
        try {
            const res = await axios.post(`${backend_url}/user/signin`,
                {
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

    function signUpView() {
        router.push('/signup')
    }

</script>

<template>
    <div class="container">
        <h1>Please sign in to continue</h1>

        <form @submit.prevent="signin">
            <div class="form-wrapper">

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

                <input type="submit" value="Sign In" />
            </div>
        </form>

        <p @click="signUpView">Don't have an account?</p>
    </div>
</template>