<template>
  <div id="app">
    <div class="container">
      <!-- In this file I want to show different ways to use componens. -->
      <app-header></app-header>
      <hr>
      <weather></weather>
      <weatherList></weatherList>
      <hr>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Weather from './components/Weather/Weather.vue';
  import WeatherList from './components/Weather/WeatherList.vue';

  export default {

    // Different ways to use the components. Vue is case insensitive.
    components: {
      'app-header': Header,
      appFooter: Footer,
      Weather,
      WeatherList
    }

  }
</script>

<style>
</style>
