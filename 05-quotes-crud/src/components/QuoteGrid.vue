<template>
  <div class="row">
    <!-- @click.native will tell vue that the click event will be in the Quote component -->
    <quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
      {{ quote }}
    </quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    props: ['quotes'],
    components: {
      Quote
    },
    data () {
      return {

      }
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    }
  }
</script>

<style>
</style>
