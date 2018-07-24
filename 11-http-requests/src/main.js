import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://your-firebase-url-here.firebaseio.com/';

/*
// Intercepting requests
Vue.http.interceptors.push(request, next => {
  console.log(request);
  // e.g we can change the http verb of the request
  // request.method == 'PUT';

  // Intercepting responses
  next( response => {
    response.json = () => { return { messages: response.body } };
  });
});
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
