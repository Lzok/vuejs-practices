import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Lazy load components. Webpack will recognize this syntax
const User = resolve => {
  // Whenever we want to load something which lives in the following first path
  // Execute the function inside, it will require the desired component
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  })
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  })
};
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  })
};
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  })
};

export const routes = [

  { path: '', name: 'home', components: {
      default: Home,
      'header-top': Header
    }
  },
  { path: '/user', components: {
    default: User,
    'header-bottom': Header
  }, children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log('Inside beforeEnter userEdit route guard');
          next();
        }
      },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' } // named route
    ]
  },
  { path: '/redirect-me', redirect: { name: 'home' } },
  { path: '*', redirect: '/' }

];
