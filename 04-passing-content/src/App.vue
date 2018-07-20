<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <quote>
            <h3>{{ quotitle }}</h3>
            <p>This is the quote body</p>
          </quote>

          <!-- Named slots -->
          <quote>
            <h3 slot="qtitle"> {{ quotitle }} </h3>
            <p slot="qbody">This is the quote body of the named slot</p>
          </quote>

          <hr>

          <!--
            Dynamic components
            With the reserved keyword <component> we will decide which componen will be rendered
            By default, the components are destroyed and recreated again when we change the rendered one
          -->
          <button @click="selectedComponent='Quote'">Quote component</button>
          <button @click="selectedComponent='Author'">Author component</button>
          <button @click="selectedComponent='New'">New component</button>
          <component :is='selectedComponent'></component>

          <!--
            If we want to keep alive the components, we need to wrap the <component> keyword
            in another reserved keyword by vue: <keep-alive>
            With the directive <keep-alive> we lose the destroyed lifecycle
          -->
          <keep-alive>
            <component :is='selectedComponent'></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    components: {
      Quote,
      Author,
      New
    },
    data() {
      return {
        quotitle: 'This is the quote title',
        selectedComponent: 'Quote'
      }
    }
  }
</script>

<style>
</style>
