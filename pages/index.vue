<template>
  <div
    class="share-data"
    contenteditable="true"
    @input="onInput"
  ></div>
</template>

<script setup lang="ts">
let timer = null;

const onInput = ($event) => {
  clearTimeout(timer);

  timer = setTimeout(async () => {
    const response = await $fetch(
      '/api/share',
      { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({ data: $event.target.innerHTML }) }
    );
    console.log('response', response);
  }, 500);
}
</script>

<style>
  body {
    margin: 0;
  }

  .share-data {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
</style>
