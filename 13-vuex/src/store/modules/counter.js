import * as types from '../types';

const state = {
  counter: 0
};

const getters = {
  // Between square brackets because javascript will assign this in runtime
  [types.DOUBLE_COUNTER]: state => { return state.counter * 2 },
  [types.STRING_COUNTER]: state => { return `${state.counter} clicks` }
};

const mutations = {
  // Mutations always have to run synchronously
  // You don't have to run async code in mutations
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
    state.counter += payload;
  },
  [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
    state.counter -= payload;
  },
};

const actions = {
  [types.COUNTER_INCREMENT]: (context, payload) => {
    context.commit(types.MUTATE_INCREMENT_COUNTER, payload);
  },
  /*
    If you want to use e.g just the commit method, you can use ES6 detructuring like this:
    increment: ({ commit }) => {
      commit('increment');
    }
  */
  [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
    commit(types.MUTATE_DECREMENT_COUNTER, payload);
  },
  [types.COUNTER_INCREMENT_ASYNC]: ({ commit }, payload) => {
    setTimeout( () => {
      commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
    }, payload.duration);
  },
  [types.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
    setTimeout( () => {
      commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
    }, payload.duration);
  }
};

export default {
  state, getters, mutations, actions
}
