<template>
  <footer>
    footerコンポーネント
    <span v-bind:title="message">Hoge</span>
    <p>{{ map }}</p>
    <p v-if="seen">seenがTureの時だけ表示</p>
    <button @click="onClick">toggle</button>
    <div v-for="point in points">
      <Point
          :isBom="point"
      ></Point>
    </div>
  </footer>
</template>

<script lang="ts" src="./script.ts"></script>

<style scoped>

</style>
