import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

/*
  Routing modes: Hash vs History
  The part in front of the hashtag will reach the server (index.html)
  The part next to the hashtag will be handled by the app (Vue in this case)

  https://router.vuejs.org/guide/essentials/history-mode.html
*/
//const router = new VueRouter({ routes });
const router = new VueRouter({
  routes,
  mode: 'history', // Default mode is hash
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) return savedPosition;
    if(to.hash) return { selector: to.hash };

    return { x: 0, y: 0 };
  }
});

router.beforeEach( (to, from, next) => {
  console.log('Global before each route guard');
  next(); // Allow the router to continue
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
