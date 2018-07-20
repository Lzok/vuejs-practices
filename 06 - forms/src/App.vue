<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Working with forms</h1>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="user.email">
              <!--
                v-model behind the scenes does a v-bind and @input
                Example with email input:
                <input
                  type="text"
                  id="email"
                  class="form-control"
                  :value="user.email"
                  @input="user.email = $event.target.value"
                >
              -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="user.password"> <!-- .lazy modifier: Instead of listen each keystroke, the binding will listen onChange -->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="user.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <!-- Interpolation between <textarea> {{ test }} </textarea> does not work-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message">
          </textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendMail">
              <input
                type="checkbox"
                id="sendMail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfoMail">
              <input
                type="checkbox"
                id="sendInfoMail"
                value="SendInfoMail"
                v-model="sendMail"> Send InfoMail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="male"
              v-model="gender"> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="female"
              v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="priority"></label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="pr in priorities">
              {{ pr }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <custom-switch v-model="dataSwitch"></custom-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submit">Submit</button>
        </div>
      </div>
    </form>

    <hr>

    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Form data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ user.email }} </p>
            <p>Password: {{ user.password }} </p>
            <p>Age: {{ user.age }} </p>
            <p style="white-space: pre">Message: {{ message }} </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }} </p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switch: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import customSwitch from './components/Switch.vue';

  export default {
    data () {
      return {
        user: {
          email: '',
          password: '',
          age: 24
        },
        message: '',
        sendMail: [],
        gender: 'male',
        selectedPriority: 'Medium',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitch: true,
        isSubmitted: false
      }
    },
    methods: {
      submit() {
        this.isSubmitted = true;
      }
    },
    components: {
      customSwitch
    }
  }
</script>

<style>
</style>
