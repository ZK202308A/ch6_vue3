import {computed, ref} from "vue";
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', () => {

    const count = ref(0)

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        console.log("increment")
        count.value++
    }

    function decrement() {
        console.log("decrement")
        count.value--
    }

    return { count,  doubleCount, decrement, increment }
})