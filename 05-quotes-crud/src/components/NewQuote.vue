<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>New Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createQuote">Send Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quote: ''
      }
    },
    methods: {
      createQuote() {
        this.$emit('quoteAdded', this.quote);
        this.quote = ''; // Clear the quote
      }
    }
  }
</script>

<style>
</style>
