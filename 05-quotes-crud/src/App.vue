<template>
  <div class="container">
    <progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></progress-bar>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a quote to delete it.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProgressBar from './components/ProgressBar.vue';
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';

  export default {
    components: {
      ProgressBar,
      QuoteGrid,
      NewQuote
    },
    data () {
      return {
        quotes: ['Initial default quote'],
        maxQuotes: 10
      }
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Delete a quote first');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>
