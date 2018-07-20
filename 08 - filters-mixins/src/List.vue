<template>
  <div>
    <h1>Filters and Mixins</h1>
    <input type="text" v-model="filteredText">
    <ul>
      <li v-for="band in filteredBands"> {{ band }} </li>
    </ul>
  </div>
</template>

<script>
  import { bandMixin } from './bandMixin.js';

  export default {
    mixins: [bandMixin]
  }
</script>

<style>
</style>
