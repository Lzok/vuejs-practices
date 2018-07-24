<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">HTTP</h1>

        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Send</button>

        <hr>

        <input type="text" class="form-control" v-model="node">
        <button class="btn btn-primary" @click="fetchUsers">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(user, index) in users" :key="index">
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource : {},
        node: 'data'
      };
    },
    methods: {
      submit() {
        // first argument is empty because we already defined the url in the main.js file in Vue.http.options.root
        /*
        this.$http.post('data.json', this.user)
          .then( response => {
            console.log(response);
          }, error => {
            console.log('Error: ', error);
          });
        */

       // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
       // this.resource.save({}, this.user);
       this.resource.saveAlternative(this.user);
      },
      fetchUsers() {
        /*
          this.$http.get('data.json')
          .then( response => {
            return response.json();
          })
          .then( data => {
            const arrayUsers = [];
            for (let key in data) {
              arrayUsers.push(data[key]);
            }
            this.users = arrayUsers;
          });
          */

         this.resource.getData({ node: this.node })
          .then( response => {
            return response.json();
          })
          .then( data => {
            const arrayUsers = [];
            for (let key in data) {
              arrayUsers.push(data[key]);
            }
            this.users = arrayUsers;
          });
      }
    },
    created() {
      // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
      // this.resource = this.$resource('data.json');
      // Custom actions
      const customActions = {
        saveAlternative: { method: 'POST', url: 'alternative.json' },
        getData: { method: 'GET' }
      };
      // this.resource = this.$resource('data.json', {}, customActions);

      // URL templates
      // Standard URI Templates: https://medialize.github.io/URI.js/uri-template.html
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
</style>
