import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => { return state.counter * 2 },
    stringCounter: state => { return `${state.counter} + clicks` }
  },
  mutations: {
    // Mutations always have to run synchronously
    // You don't have to run async code in mutations
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  }
});
