<script lang="ts" setup>
const signal = ref<AbortController | null>();
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
const item = ref();
const isFinished = ref<boolean>(false);
const count = ref<number>(0);

onMounted(async () => {
  signal.value = new AbortController();
  const rawResp = await fetch(apiUrl, { signal: signal.value.signal });
  const resp = await rawResp.json();
  item.value = resp;
  isFinished.value = true;
});

onUnmounted(() => {
  signal.value?.abort();
});
</script>

<template>
  <div>
    <span v-if="!isFinished">Loading...</span>
    <h1 v-else>Hello {{ item.title }}</h1>
    <p>count -> {{ count }}</p>
    <button @click="() => count++">click me</button>
  </div>
</template>
