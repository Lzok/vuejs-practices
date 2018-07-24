<template>
  <div>
    <h4>User Details</h4>
    <p>User loaded id: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="'/user/'+ $route.params.id + '/edit'"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>
