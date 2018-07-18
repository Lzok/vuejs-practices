import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    // Note this is a new vue instance, not a component; so data is an object, not a function that returns an object
  },
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
