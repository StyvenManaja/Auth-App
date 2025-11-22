<script setup>
    import { useUserStore } from '@/scipts/userStore'
    import { ref } from 'vue'

    const store = useUserStore()

    const username = ref(store.username)
</script>

<template>
    <h1>Hello, {{ username }}</h1>
</template>