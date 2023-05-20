<script lang="ts" setup>
const controller = ref<AbortController | null>();
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
const item = ref();
const isFinished = ref<boolean>(false);
const count = ref<number>(0);

onMounted(async () => {
  controller.value = new AbortController();
  setTimeout(async () => {
    const rawResp = await fetch(apiUrl, { signal: controller.value!.signal });
    const resp = await rawResp.json();
    item.value = resp;
    isFinished.value = true;
  }, 2000);
});

onUnmounted(() => {
  controller.value?.abort();
});
</script>

<template>
  <div>
    <span v-if="!isFinished">Loading...</span>
    <h1 v-else>Hello {{ item.title }}</h1>
    <p>count -> {{ count }}</p>
    <button @click="() => count++">click me</button>
    <button @click="() => controller?.abort()">cancel</button>
  </div>
</template>
