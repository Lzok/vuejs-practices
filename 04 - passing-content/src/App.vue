<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <quote>
            <h3>{{ quotitle }}</h3>
            <p>This is the quote body</p>
          </quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    components: {
      Quote
    },
    data() {
      return {
        quotitle: 'This is the quote title'
      }
    }
  }
</script>

<style>
</style>
