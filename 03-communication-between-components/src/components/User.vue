<template>
  <div class="row">
    <h1>The Parent User Component</h1>
    <button @click="changeName">Change my Name</button>
    <p>My Name is {{ userName }}</p>
    <!-- The age here will not change. It will only change between sibling components -->
    <p>My Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- If we don't pass the prop with ':' before, just a string will be passed -->
        <user-detail
          :userName="userName"
          @nameWasReset="userName = $event"
          :resetFn="resetName"
          :userAge="age"
        ></user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <user-edit
          :userAge="age"
          @ageWasEdited="age = $event"
        ></user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    components: {
      UserDetail,
      UserEdit
    },
    data() {
      return {
        userName: 'Slim Shady',
        age: 24
      }
    },
    methods: {
      changeName () {
        this.userName = 'Algor';
      },
      resetName () {
        this.userName = 'Slim Shady';
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
