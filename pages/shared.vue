<template>
  <div
    v-html="data"
    class="share-data"
    contenteditable="true"
  ></div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/sync');
</script>
