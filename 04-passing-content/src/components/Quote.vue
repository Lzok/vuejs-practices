<template>
  <div>
    <!-- <p>I am the best quote you will see</p> -->
    <!-- The slot keyword is reserved by vue. It will take whatever receives from outside and render it here -->
    <slot></slot>

    <!-- Named slots -->
    <div class="named-slots">
      <slot name="qtitle" class="title"></slot>
      <slot name="qbody" class="body"></slot>
    </div>

    <!--
      Default slots
      The no named slots will be the default slots.
      Also we can set default content for the slots doing the following
    -->
    <slot name="defaultContent">
      This sentence will be the default content because it is inside the slot directive
    </slot>
  </div>
</template>

<script>
</script>

<style scoped>
  div {
    border: 1px solid black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  .named-slots h3 {
    font-size: 20px;
    font-style: italic;
  }

  .named-slots p {
    font-size: 16px;
  }
</style>
