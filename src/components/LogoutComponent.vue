<script setup>

import {useTokenStore} from "../stores/tokenStore.jsx";
import {useRouter} from "vue-router";

const {clearToken} = useTokenStore()
const router = useRouter()

const handleClick = () => {
  clearToken()
  router.push("/")
}

</script>

<template>
  <button class="bg-red-300" @click="handleClick">
    Logout
  </button>
</template>

<style scoped>

</style>