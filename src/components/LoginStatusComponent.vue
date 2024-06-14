<script setup>

import {storeToRefs} from "pinia";
import {useTokenStore} from "../stores/tokenStore.jsx";
import LogoutComponent from "./LogoutComponent.vue";

const {token} = storeToRefs(useTokenStore())




</script>

<template>

  <div class="bg-blue-300">
      LOGIN STATUS: {{token.mid}}
    <div class="float-end">
      <LogoutComponent v-if="token.mid"/>
    </div>

  </div>

</template>

<style scoped>

</style>