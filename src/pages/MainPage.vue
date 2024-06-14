<script setup>

import {useCounterStore} from "../stores/countStore.jsx";
import {storeToRefs} from "pinia";
import CountTest from "../components/CountTest.vue";

const countStore = useCounterStore()

const {count} = storeToRefs(countStore)

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Main Page
  </h1>
  <h2>
    Count: {{count}}
  </h2>

  <div>
    <button @click="countStore.increment">Increment</button>
    <button @click="countStore.decrement">Decrement</button>
  </div>

  <div>
    <CountTest></CountTest>
  </div>

</template>

<style scoped>

</style>