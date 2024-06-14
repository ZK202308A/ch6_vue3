<script setup>

import {useCounterStore} from "../stores/countStore.jsx";
import {storeToRefs} from "pinia";

const countStore = useCounterStore()

const {count} = storeToRefs(countStore)

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Count Test
  </h1>
  <h2>
    Count: {{count}}
  </h2>

</template>

<style scoped>

</style>