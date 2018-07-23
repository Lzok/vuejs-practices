<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <br><br>

        <!-- Transition will only show one element at time -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">Important info!</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">Important info with slide!</div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="showOnLoad">Important info with slide!</div>
        </transition>
        <br>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">Dynamic animation here</div>
        </transition>

        <!-- Transitioning between multiple elements
          Need to pay atention to the key attribute. Whithout it, vuejs
          can't make animations between multiple elements
          Also see the `mode` tag in transition element -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Some info here</div>
          <div class="alert alert-warning" v-else key="warning">Some warning here</div>
        </transition>
        <hr>

        <!--
          Transition JS Hooks
          ===> Element ==>
          before-enter
          enter
          after-enter
          after-enter-cancelled

          before-leave
          leave
          after-leave
          after-leave-cancelled

          Ref: https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks (visited 2018-07-23)
        -->
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="height: 100px; width: 300px; background-color: lightblue" v-if="load"></div>
        </transition>

        <hr>

        <button class="btn btn-primary" @click="switchComponent">Toggle Component</button>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>

        <hr>

        <!--
          Difference between <transition> and <transition-group>
          <transition> is not rendered to the DOM
          <transition-group> does render a new html tag
          By default, that will be a <span>, but you can overwrite this
          by setting <transition-group tag="TAG">
        -->
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              @click="removeItem(index)"
              :key="number"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import dangerAlert from './DangerAlert.vue';
  import successAlert from './SuccessAlert.vue';

  export default {
    data() {
      return {
        show: false,
        showOnLoad: false,
        load: true,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'success-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    components: {
      dangerAlert,
      successAlert
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        // The place to animate is the enter and leave functions
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done()
          }
        }, 20);
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done()
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled');
      },
      switchComponent() {
        this.selectedComponent == 'success-alert' ? this.selectedComponent = 'danger-alert' : this.selectedComponent = 'success-alert';
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
    /* opacity default is 1 */
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    /* transform: translateY(20px); */
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
