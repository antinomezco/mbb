<template>
  <div id="app">
    <app-header></app-header>
    <v-spacer></v-spacer>
    <app-body></app-body>
  </div>
</template>

<script>
import Header from './components/static/Header.vue'
import Body from './components/static/Body.vue'


export default {
  name: 'App',
  components: {
    appHeader: Header,
    appBody: Body
  }
}
</script>

<style>
.v-application--wrap {
  min-height: 0vh;
}
</style>