<template>
  <div class="row">
    <weather v-for="w in 5"></weather>
  </div>
</template>

<script>
  import Weather from './Weather.vue';

  export default {

    components: {
      Weather
    }

  }
</script>
