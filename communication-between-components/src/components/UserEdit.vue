
<template>
  <div class="row">
    <h3>You may edit the User Details here</h3>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age (event bus)</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      userAge: Number
    },
    methods: {
      editAge () {
        this.userAge = 32;
        // this.$emit('ageWasEdited', this.userAge);
        // eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(this.userAge);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
