<template>
  <div>
    <h4>User Details</h4>
    <p>User loaded id: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: { id: this.$route.params.id },
          query: { locale: 'en', q: 100 },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('Inside component UserDetail beforeRouteEnter guard');
      if (true) next(); // Here for example will check if the user is authenticated
      else next(false);
      // next(); // If next is not called, the component will not be loaded
    }
  }
</script>
