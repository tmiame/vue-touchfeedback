<template>
<div class="app">
  <section>
    <h1>hover & click</h1>
    <div class="Box" v-touchfeedback></div>
    <pre>&lt;div class="Box" <b>v-touchfeedback</b>&gt;&lt;/div&gt;</pre>
  </section>

  <section>
    <h1>hover animation & click animation</h1>
    <div class="Box DemoAnimation" v-touchfeedback:animation.hover.click></div>
    <pre>&lt;div class="Box" <b>v-touchfeedback:animation.hover.click</b>&gt;&lt;/div&gt;</pre>
  </section>

  <section>
    <h1>hover animation</h1>
    <div class="Box DemoAnimation" v-touchfeedback:animation.hover></div>
    <pre>&lt;div class="Box" <b>v-touchfeedback:animation.hover</b>&gt;&lt;/div&gt;</pre>
  </section>

  <section>
    <h1>click animation</h1>
    <div class="Box DemoAnimation" v-touchfeedback:animation.click></div>
    <pre>&lt;div class="Box" <b>v-touchfeedback:animation.click</b>&gt;&lt;/div&gt;</pre>
  </section>
</div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
    }
  }
}
</script>
