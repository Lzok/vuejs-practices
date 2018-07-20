<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <h5>{{ text | toUppercase }}</h5>
        <hr>
        <input type="text" v-model="filteredText">
        <ul>
          <li v-for="band in filteredBands"> {{ band }} </li>
        </ul>
        <hr>
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue';
  import { bandMixin } from './bandMixin.js'
  // Mixins are merged into our Vue instance!
  // Mixins will be load first, then the components

  export default {
    components: {
      List
    },
    mixins: [bandMixin],
    data () {
      return {
        text: 'I am just a piece of text'
      }
    },
    // local filter. For global filter use Vue.filter()
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>
</style>
