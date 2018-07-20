import Vue from 'vue'
import App from './App.vue'

// Custom directive (global)
Vue.directive('highlighted', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'lightblue';
  }
});

// With custom values
Vue.directive('highlightedCustom', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
});

// With args
Vue.directive('withArgs', {
  bind(el, binding, vnode) {
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    }
  }
});

// With modifiers
Vue.directive('withMods', {
  bind(el, binding, vnode) {
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000; // 3 seconds = 3000ms
    }

    setTimeout(() => {
      el.style.backgroundColor = binding.value;
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
