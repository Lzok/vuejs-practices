import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from './components/welcome/welcome.vue';
import Dashboard from './components/dashboard/dashboard.vue';
import SignUp from './components/auth/signup.vue';
import SignIn from './components/auth/signin.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Welcome},
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/dashboard', component: Dashboard }
];

export default new VueRouter({ mode: 'history', routes });
