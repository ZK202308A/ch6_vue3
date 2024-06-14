<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LoginStatusComponent from "./components/LoginStatusComponent.vue";
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>

  <LoginStatusComponent></LoginStatusComponent>

  <nav class="p-2 bg-cyan-300">
    <RouterLink to="/"> Main </RouterLink>
    <RouterLink to="/login"> Login </RouterLink>
    <RouterLink to="/mypage"> MyPage </RouterLink>
  </nav>


  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
