<template>
  <div class="row">
    <h3>You will view the User Details here</h3>
    <p>Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name (event)</button>
    <button @click="resetFn()">Reset Name (callback fn)</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      // Validation for multiple types. Enclose the possible valid types in an array
      // userName: [String, Array]
      userName: {
        type: String,
        required: true,
        // default: 'Slim Shady'
      },
      resetFn: Function,
      userAge: Number
      /*userAge: {
        type: Object,
        default: () => {
          return {
            age: '35'
          }
        }
      }*/
    },
    methods: {
      switchName () {
        return this.userName.split('').reverse().join('');
      },
      resetName () {
        this.userName = 'Slim Shady';
        this.$emit('nameWasReset', this.userName);
      }
    },
    // Lifecycle method. If the component is created, then the event bus starts to listen
    created () {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
