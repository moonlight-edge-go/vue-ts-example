<template>
  <main>
    mainコンポーネント
    <div>{{ counter }}</div>
    <button @click="increment">count up</button>
  </main>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>
main {
  height: 300px;
}
</style>
