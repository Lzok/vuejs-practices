<template>
  <!--
    Directives Hooks (like lifecycle)
    bind(el, binding, vnode) => Once directive is attached
    inserted(el, binding, vnode) => Inserted in parent node
    update(el, binding, vnode, oldVnode) => Once component is updated (without children)
    componentUpdated(el, binding, vnode, oldVnode) => Once component is updated (with children)
    unbind(el, binding, vnode) => Once directive is removed
  -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'This text is coming from a vue directive'"></p>
        <!-- Be careful to use v-html. You need to sanitize the data in order to prevent xss attacks -->
        <p v-html="'<strong>Bold text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlighted v-text="'I am a paragraph'"></p>
        <p v-highlightedCustom="'lightgreen'" v-text="'I am the paragraph of one custom directive'"></p>
        <p v-withArgs:background="'pink'">I am a pink paragraph</p>

        <!-- With modifiers -->
        <p v-withMods.delayed="'orange'">I am an orange paragraph</p>

        <p v-local-highlight="'purple'">I am a purple paragraph</p>
        <p v-local-highlight-w-blink.delayed.blink="{mainColor: 'green', secondColor: 'gray', delay: 500}">I am a blinking paragraph</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // Local custom directives
    directives: {
      'localHighlight': {
        bind(el, binding, vnode) {
          el.style.backgroundColor = binding.value;
        }
      },
      'localHighlightWBlink': {
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000; // 3 seconds = 3000ms
          }
          if(binding.modifiers['blink']) {
            const mainColor = binding.value.mainColor;
            const secondColor = binding.value.secondColor;
            let currentColor = mainColor;

            setTimeout(() => {
              setInterval(() => {
                (currentColor == secondColor) ? currentColor = mainColor : currentColor = secondColor;
                el.style.backgroundColor = currentColor;
              }, binding.value.delay);
            }, delay);
          }
        }
      }
    }
  }
</script>

<style>
</style>
